import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const isAndroid = Platform.OS === 'android'
  console.log(StatusBar.currentHeight)
  return (
    <>
      <SafeAreaView style={{ flex: 1,}}>
        <View style={{
          alignSelf: 'stretch',
          padding: 15,
          backgroundColor: 'green'
        }} >
          <Text>Search</Text>
        </View>
        <View style={{
          flex: 1,
          alignSelf: 'stretch',
          flexGrow: 1,
          backgroundColor: 'blue',
          padding: 20
        }}>
          <Text>
            List
          </Text>
        </View>
      </SafeAreaView >
      <ExpoStatusBar style='auto' />
    </>
  );
}

const styles = StyleSheet.create({

});
