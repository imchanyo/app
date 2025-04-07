import React from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';

function App(): React.JSX.Element {
  const handlerChange = (text: string) => {
    console.log(text);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <Text>test</Text>
        <TextInput style={styles.input} onChangeText={handlerChange} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  inputContainer: {
    flexDirection: 'row',
  },
  input: {
    borderWidth: 2,
    borderColor: 'black',
  },
});

export default App;
