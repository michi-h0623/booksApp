import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function DetailsScreen() {
  return (
    <View style={styles.view}>
      <Text>Details Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DetailsScreen;
