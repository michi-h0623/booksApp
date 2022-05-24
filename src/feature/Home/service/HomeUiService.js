import React from 'react';
import {Text, Image, StyleSheet, View, FlatList, Pressable} from 'react-native';

const _renderFlatListItem = ({item}, navigation) => {
  const volume = item.volumeInfo;

  const title = volume.title;
  const authors = volume.authors;
  const publishedDate = volume.publishedDate;
  const description = volume.description;
  const imageLinks = volume.imageLinks;
  const thumbnail = imageLinks.thumbnail;

  return (
    <Pressable
      style={styles.renderItemContainer}
      onPress={() => {
        navigation.navigate('Details', {
          title: title,
          authors: authors,
          thumbnail: thumbnail,
          description: description,
          publishedDate: publishedDate,
        });
      }}>
      <Image
        style={styles.image}
        source={{
          uri: thumbnail,
        }}
      />
    </Pressable>
  );
};

export const renderFlatList = (booksData, category, navigation) => {
  return (
    <View key={category}>
      <Text style={styles.title}>Category: {category}</Text>
      <FlatList
        data={booksData?.items}
        renderItem={item => _renderFlatListItem(item, navigation)}
        keyExtractor={item => item.etag}
        horizontal={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  renderItemContainer: {
    paddingLeft: 20,
  },
  image: {
    width: 90,
    height: 140,
  },
  title: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingBottom: 10,
    fontSize: 16,
  },
});
