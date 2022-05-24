import React from 'react';
import {SafeAreaView, Text, StyleSheet, Pressable} from 'react-native';

const ErrorScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.view}>
      <Text>エラーが発生しました。</Text>
      <Text>再読み込みを行なってください。</Text>
      <Pressable
        style={styles.pressable}
        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{name: 'Home'}],
          });
        }}>
        <Text style={styles.text}>再読み込み</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    paddingTop: 20,
    textDecorationLine: 'underline',
    color: 'blue',
  },
});

export default ErrorScreen;
