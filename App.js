import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import { Gesture, GestureHandlerRootView } from 'react-native-gesture-handler';
import AccountScreen from './app/screens/AccountScreen';
import ListingScreen from './app/screens/ListingScreen';
import { Text, TextInput } from 'react-native';
import { useState } from 'react';
import AppTextInput from './app/components/AppTextInput';

export default function App() {
  const [firstName, setFirstName] = useState('');

  return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <AppTextInput placeholder='Username' icon={'email'}/>
      </GestureHandlerRootView>
    );
}
