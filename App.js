import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  const handlePress = () => {
    console.log('text clicked!');
  };

  return (
    <View style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>Hello React Native!</Text>
      <Image 
        source={{ 
          uri: 'https://picsum.photos/200/300',
          width: 200,
          height: 300,
        }} 
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
