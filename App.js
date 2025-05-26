import { StyleSheet, 
    Text, 
    Image, 
    TouchableWithoutFeedback, 
    Button, 
    Alert, 
    SafeAreaView, 
    Platform, 
    StatusBar, 
    View,
    useWindowDimensions } from 'react-native';
 import { useDeviceOrientation } from '@react-native-community/hooks'; 

export default function App() {
  const handlePress = () => {
    console.log('image clicked!');
  };

  const {landscape} = useDeviceOrientation();
  const { width, height } = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

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

      <View style={{
        backgroundColor: 'dodgerblue',
        width: "100%",
        height: landscape ?  "100%" :  "30%",
        marginTop: 20,
      }}>

      </View>
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
