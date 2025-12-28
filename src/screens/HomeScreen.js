import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';


const HomeScreen = ({ navigation }) => {
  const [resim, setResim] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(cevap => {
        setResim(cevap.data);
      })
      .catch(error => {
        console.error("Hata var:", error);
      });
  }, []);

  return (
    <View>
      <FlatList style={{ backgroundColor: 'white'}}
        data={resim}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
        <View>
          <Text style={styles.yazi}> Fotoğraf ID değeri: {item.id} </Text>
          <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Detaylar', { resimId: item.id })}>
            <Image source={{ uri: item.url }} style={{ width: 400, height: 200, borderRadius:8 }} />
          </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: 'gray',
    
  },
  yazi: {
    color: "black",
    fontSize: 28,
    fontWeight:"bold"
  }
})


export default HomeScreen;
