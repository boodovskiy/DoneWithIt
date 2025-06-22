
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import LoginScreen from './app/screens/LoginScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';


export default function App() {


  return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ListingEditScreen />
      </GestureHandlerRootView>
    );
}
