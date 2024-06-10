import React, { useState, useEffect } from 'react';
import { Text, View, Button, Alert } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import * as Clipboard from 'expo-clipboard'; // Import Clipboard from expo-clipboard
import { recognize } from 'react-native-tesseract-ocr';


export default function Scanner() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [recognizedText, setRecognizedText] = useState('');

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handlePickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      processImage(result.uri);
    }
  };

  const processImage = async (imageUri) => {
    try {
      const recognized = await recognize(imageUri, 'LANG_ENGLISH');
      setRecognizedText(recognized);
      // You can then analyze the recognized text for harmful ingredients
    } catch (error) {
      Alert.alert('Error', 'Failed to process image');
    }
  };

  const handleClipboard = async () => {
    const text = await Clipboard.getStringAsync(); // Use Clipboard from expo-clipboard
    setRecognizedText(text);
    // You can then analyze the copied text for harmful ingredients
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            padding: 20,
          }}>
          <Button title="Pick Image" onPress={handlePickImage} />
          <Button title="Paste Text" onPress={handleClipboard} />
        </View>
      </Camera>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 16, marginTop: 20 }}>
          Recognized Text:
        </Text>
        <Text>{recognizedText}</Text>
      </View>
    </View>
  );
}