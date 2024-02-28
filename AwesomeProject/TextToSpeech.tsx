// Import necessary components from React Native and react-native-tts
import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import Tts from 'react-native-tts';

const TextToSpeech = () => {
  const [textToRead, setTextToRead] = useState('');

  const speakText = async () => {
    // Check if the Text-to-Speech engine is ready
    try{
        const available = await Tts.getInitStatus();

      if (available) {
        // Set the text to be spoken
        await Tts.speak(textToRead);
      } else {
        console.error('Text-to-Speech engine not available.');
      }
    } catch (error) {
      console.error('Error initializing Text-to-Speech:', error);
    }
  };
    
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Enter text to be spoken:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10, padding: 5 }}
        onChangeText={setTextToRead}
        value={textToRead}
      />
      <Button title="Speak" onPress={speakText} />
    </View>
  );
};

export default TextToSpeech;




