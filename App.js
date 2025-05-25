import { StyleSheet, Text, Image, TouchableWithoutFeedback, Button, Alert, SafeAreaView, Platform, StatusBar } from 'react-native';

export default function App() {
  const handlePress = () => {
    console.log('image clicked!');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1}>Hello React Native!</Text>
      <TouchableWithoutFeedback onPress={handlePress}>
        <Image 
          source={{ 
            uri: 'https://picsum.photos/200/300',
            width: 200,
            height: 300,
          }} 
        />
      </TouchableWithoutFeedback>
      <Button 
        color="#841584"
        title='Click me' 
        onPress={() => Alert.alert("Button Pressed!", "You clicked the button!", [
          { text: 'OK' },
          { text: 'CANCEL' },
        ])} 
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, // Adjust for Android status bar height
  },
});
