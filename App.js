import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableNativeFeedback,
  TouchableOpacity, TouchableHighlight
} from 'react-native';

export default function App() {
  console.log(require("./assets/icon.png"));


  return (
    <SafeAreaView style={styles.container}>
      <Text>Golf App
      </Text>
      <TouchableOpacity onPress={() => console.log("Image tapped")}>
        <View style={{ width: 200, height: 70, backgroundColor: "dodgerblue" }}></View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log("photo tapped")}>
        <Image source={{
          height: 300,
          width: 200,
          uri: "https://picsum.photos/200/300",
        }} />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
