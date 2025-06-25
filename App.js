import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";

export default function App() {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      alert("Permission to access camera roll is required!");
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  return <GestureHandlerRootView style={{ flex: 1 }}></GestureHandlerRootView>;
}
