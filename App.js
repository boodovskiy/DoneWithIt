import { View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {


  return <GestureHandlerRootView style={{ flex: 1 }}>
    <MessagesScreen />
  </GestureHandlerRootView>;
}
