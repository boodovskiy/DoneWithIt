import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import { Gesture, GestureHandlerRootView } from 'react-native-gesture-handler';
import AccountScreen from './app/screens/AccountScreen';
import ListingScreen from './app/screens/ListingScreen';
import { Text, TextInput } from 'react-native';
import { useState } from 'react';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';

const categories = [
  { label: 'Furniture', value: 1, icon: 'floor-lamp' },
  { label: 'Clothing', value: 2, icon: 'shoe-heel' },
  { label: 'Cameras', value: 3, icon: 'camera' },
  { label: 'Cars', value: 4, icon: 'car' },
];

export default function App() {
  const [category, setCategory] = useState(categories[0]);

  return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <AppPicker
          selectedItem={category}
          onSelectItem={item => setCategory(item)}
          items={categories} icon="apps" placeholder="Category" 
        />
        <AppTextInput icon="email" placeholder="Email" />
      </GestureHandlerRootView>
    );
}
