import React, { useState } from "react";
import { TouchableOpacity, StatusBar, StyleSheet, ScrollView, Text, View, Image, FlatList, ActivityIndicator } from 'react-native';
import categories from '../../assets/categories';



interface HomeCategoryProps {
  category: {
    id: String,
    title: String,
    movies: {
      id: String,
      poster: String
    }[],
  }
}


const HomeCategory = (props: HomeCategoryProps) => {
  const { category } = props;
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>{category.title}</Text>
        <FlatList
          data={category.movies}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <Image style={styles.image} source={{ uri: item.poster }} />
            </TouchableOpacity>
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}

        />

      </ScrollView>
    </View>
  );
}

export default HomeCategory;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#222222',
    paddingTop: StatusBar.currentHeight,


  },
  image: {
    width: 100,
    height: 170,
    resizeMode: 'cover',
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 7,
    marginRight: 0
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'white'

  }
});


