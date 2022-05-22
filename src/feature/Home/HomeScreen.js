import React, {useEffect, useRef} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {getBooksData} from './HomeService';

const HomeScreen = ({navigation}) => {
  const booksData = useRef();

  useEffect(() => {
    (async () => {
      booksData.current = await getBooksData();
    })();
  }, []);

  return (
    <View style={styles.view}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
