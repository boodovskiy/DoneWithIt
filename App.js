
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import LoginScreen from './app/screens/LoginScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import MessagesScreen from './app/screens/MessagesScreen';


export default function App() {


  return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <MessagesScreen />
      </GestureHandlerRootView>
    );
}
