import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import { Gesture, GestureHandlerRootView } from 'react-native-gesture-handler';
import AccountScreen from './app/screens/AccountScreen';
import ListingScreen from './app/screens/ListingScreen';

export default function App() {
  return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ListingScreen />
      </GestureHandlerRootView>
    );
}
