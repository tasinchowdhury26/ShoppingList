import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, Alert } from 'react-native';
// import {uuid} from 'uuidv4';
import { v4 as uuid } from "uuid";
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    { id: uuid(), text: 'Milk' },
    { id: uuid(), text: 'Soap' },
    { id: uuid(), text: 'Juice' },
    { id: uuid(), text: 'Protein' },
    { id: uuid(), text: 'Egg' },
    { id: uuid(), text: 'Spices' }
  ]);

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  }
  const addItem = text => {
    if(!text){
      Alert.alert('Error','Please enter item name',[{text:'OK'}])
    }else{
      setItems(prevItems => {
        return [{ id: uuid(), text }, ...prevItems]
      });
    }
  };

  const headerTitle = "Shopping List";
  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />

      <FlatList data={items} renderItem={({ item }) =>
        <ListItem item={item} deleteItem={deleteItem} />} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;