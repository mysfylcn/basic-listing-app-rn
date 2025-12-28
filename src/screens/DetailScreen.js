import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';

const DetailScreen = ({ route, navigation }) => {
  const { resimId } = route.params;
  const [resimTitle, setResimTitle] = useState('');

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/photos/${resimId}`)
      .then(response => {
        setResimTitle(response.data.title);
      })
      .catch(error => {
        console.error("Hata var", error);
      });
  }, [resimId]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{resimTitle}</Text>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
    <Text style={styles.button}>Geri Dön</Text>
  </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#f2f2f2",
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
    color:"#333333"
  },
  button: {
    backgroundColor:"#e74c3c",
    color:"white",
    fontSize:18,
    padding:8,
    borderRadius:12,
    fontWeight:"bold"
  },
});

export default DetailScreen;
