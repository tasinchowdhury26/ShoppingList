import React, {useState} from 'react';
import {View,Text,Image, StyleSheet, FlatList} from 'react-native';
// import {uuid} from 'uuidv4';
import { v4 as uuid} from "uuid";
import Header from './components/Header';
const App = () => {

  const [items,setItems] = useState([
    {id: uuid(), text: 'Milk'},
    {id: uuid(), text: 'Soap'},
    {id: uuid(), text: 'Juice'},
    {id: uuid(), text: 'Protein'},
    {id: uuid(), text: 'Egg'},
    {id: uuid(), text: 'Spices'}
  ]);

  const headerTitle = "Shopping List";
  return (
      <View style={styles.container}>
        <Header title={headerTitle}/>
        <FlatList data={items} renderItem={({item}) =>
          <Text>{item.text}</Text>}/>
      </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1
  }
});

export default App;