import { useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import { View, Image } from "react-native";
import { Button } from "react-native";

export default function App() {
  const [imageUri, setImageUri] = useState();

  const requestPermission = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Permission to access camera roll is required!");
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();

      if (!result.canceled) {
        setImageUri(result.assets[0].uri);
      }
    } catch (error) {
      console.error("Error selecting image:", error);
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ alignItems: "center", marginTop: 50 }}>
        <Button title="Select Image" onPress={selectImage} />
        <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
      </View>
    </GestureHandlerRootView>
  );
}
