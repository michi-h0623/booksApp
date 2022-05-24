import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';

function DetailsScreen({route}) {
  const {params} = route;
  console.log(params);
  return (
    <ScrollView>
      <View style={styles.view}>
        <Text style={styles.title}>{params.title}</Text>
        <Text style={styles.authors}>{params.authors}</Text>
        <Image
          style={styles.image}
          source={{
            uri: params.thumbnail,
          }}
        />
        <Text style={styles.subtitle}>概要</Text>
        <Text style={styles.description}>{params.description}</Text>
        <Text style={styles.subtitle}>発刊日</Text>
        <Text style={styles.publishedDate}>{params.publishedDate}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  view: {
    paddingBottom: 30,
  },
  title: {
    paddingTop: 30,
    paddingRight: 25,
    paddingLeft: 25,
    paddingBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontWeight: 'bold',
    paddingTop: 30,
    paddingRight: 25,
    paddingLeft: 25,
    fontSize: 16,
  },
  authors: {
    paddingLeft: 25,
    paddingBottom: 25,
  },
  image: {
    width: 180,
    height: 280,
    alignSelf: 'center',
  },
  description: {
    paddingTop: 5,
    paddingRight: 25,
    paddingLeft: 25,
    paddingBottom: 5,
    fontSize: 14,
  },
  publishedDate: {
    paddingTop: 5,
    paddingRight: 25,
    paddingLeft: 25,
    paddingBottom: 10,
    fontSize: 14,
  },
});

export default DetailsScreen;
