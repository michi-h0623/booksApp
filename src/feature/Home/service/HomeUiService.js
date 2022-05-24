import React from 'react';
import {Text, Image, StyleSheet, View, FlatList} from 'react-native';

export const renderFlatListItem = ({item}) => {
  // const totalItems = item.totalItems;
  const volume = item.volumeInfo;

  // const title = volume.title;
  // const authors = volume.authors;
  // const publishedDate = volume.publishedDate;
  // const description = volume.description;

  const imageLinks = volume.imageLinks;
  // const smallThumbnail = imageLinks.smallThumbnail;
  const thumbnail = imageLinks.thumbnail;

  return (
    <View style={styles.renderItemContainer}>
      <Image
        style={styles.image}
        source={{
          uri: thumbnail,
        }}
      />
    </View>
  );
};

export const renderFlatList = (booksData, category) => {
  return (
    <View>
      <Text style={styles.title}>Category: {category}</Text>
      <FlatList
        data={booksData?.items}
        renderItem={item => renderFlatListItem(item)}
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
