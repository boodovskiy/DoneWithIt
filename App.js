import { useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import { View, Image } from "react-native";
import { Button } from "react-native";
import ImageInput from "./app/components/ImageInput";

export default function App() {
  const [imageUri, setImageUri] = useState();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ alignItems: "center", marginTop: 50 }}>
        <ImageInput
          imageUri={imageUri}
          onChangeImage={(uri) => setImageUri(uri)}
        />
      </View>
    </GestureHandlerRootView>
  );
}
