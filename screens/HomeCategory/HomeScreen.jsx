import React, { useState } from "react";
import {  SafeAreaView , StyleSheet, FlatList } from 'react-native';
import HomeCategory from ".";
import categories from '../../assets/categories';



const HomeScreen = () => {

  return (
    
    <SafeAreaView  style={styles.container}>
      <FlatList 
      data={categories.movieItems}
      renderItem={({item})=> <HomeCategory category={item} /> }
      />
    </SafeAreaView >
  );
}

export default HomeScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 'auto',
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 0,
    backgroundColor: '#222222',
    // paddingTop: StatusBar.currentHeight,


  },
});


