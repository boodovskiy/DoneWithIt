import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import { Gesture, GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Screen>
        <ListItem 
          title="My List Item"
          ImageComponent={
            <Icon 
              name="email"
              backgroundColor="#fc5c65"
              iconColor="#fff"
            />
          }
        />
        </Screen>
      </GestureHandlerRootView>
    );
}
