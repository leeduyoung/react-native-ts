import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  public render(): JSX.Element {
    return (
      <View style={styles.container}>
        <View>
          test div
        </View>
        <Text>test div</Text>
        <Text>Hello world</Text>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
