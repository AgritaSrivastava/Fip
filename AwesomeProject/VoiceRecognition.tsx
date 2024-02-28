// VoiceRecognition.tsx
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import Voice, {
  SpeechEndEvent,
  SpeechStartEvent,
} from '@react-native-voice/voice';

const VoiceRecognition = () => {

  //declarations
  const [started, setStarted] = useState('');
  const [ended, setEnded] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    console.log('Setting up SpeechStart event listener');
    const speechStart = (e: SpeechStartEvent) => {
      console.log('Inside Speechstart event listener');
      try{
      console.log('in const started', e);
      setStarted('start');
      console.log(started);
      console.log('in start out');
      }
      catch(e){console.log('in start',e);}
    };
    // const speechRecognized = (e:any)=>{
    //   console.log('recognized');
    // }
    console.log('Setting up SpeechResult event listener');
    const speechResult = (e: any) => {
      console.log("hi from result");
      try{
      console.log('Speech Result', e);
      setResults(e.value);
      console.log('in result out');
      }catch(e){console.log('in result',e);}
    };
    console.log('Setting up SpeechEnd event listener');
    const speechStop = (e: any) => {
      console.log("hi from speechEnd");
      try{
      console.log('in const ended', e);
      setEnded('end');
      console.log('in end out');
      }catch(e){console.log('in stop',e);}
    };
    try{
      Voice.onSpeechStart = speechStart;
      console.log("VoiceStart")
    }catch(e){console.log(e)}
    try{
      Voice.onSpeechResults = speechResult;
      console.log('voice result')
    }catch(e){console.log(e)}
    try{
      Voice.onSpeechEnd = speechStop;
      console.log("voice end");
    }catch(e){console.log(e)}
     // Voice.onSpeechRecognized = speechRecognized;
    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const startListening = async () => {
    try {
      //console.log("Hi from start");
      await Voice.start('en-US');
      //console.log("heard");
      setStarted('');
      //console.log("started")

      //console.log("end");
      setResults([]);
      setEnded('');
      console.log('StartListeningFunction Executed');
    } catch (error) {
      console.log('Error from start', error);
    }
  };
  const stopListening = async () => {
    try {
      //console.log("Hi from end");
      await Voice.stop();
      await Voice.destroy();
     // setStarted('');
      setEnded('');
      //setResults([]);
      console.log('StopListeningFunction Executed');
      await new Promise(resolve => setTimeout(resolve,100));
      console.log('Result', results);

    } catch (err) {
      console.log('Error from end', err);
    }
  };

  // const stopListening = async () => {
  //   try {
  //     //console.log("Hi from end");
  //     await Voice.stop();
  //     await Voice.destroy();
  //     // setStarted('');
  //     // setEnded('');
  //     // setResults([]);
  
  //     // Create a promise that resolves when onSpeechEnd is triggered
  //     const speechEndPromise = new Promise(resolve => {
  //       const handleSpeechEnd = () => {
  //         Voice.onSpeechEnd = null; // Remove the listener once it's triggered
  //         resolve();
  //       };
  //       Voice.onSpeechEnd = handleSpeechEnd;
  //     });
  
  //     console.log('StopListeningFunction Executed');
  
  //     // Wait for the onSpeechEnd event before logging results
  //     await speechEndPromise;
  
  //     console.log('Result', results);
  //   } catch (err) {
  //     console.log('Error from end', err);
  //   }
  // };
  
  return (
    <View>
      <Text>Voice To Text</Text>
      <TouchableOpacity onPress={startListening}>
        <Text>Start Listening</Text>
      </TouchableOpacity>
      <ScrollView>
        {results.map(item => {
          return <Text>{item}</Text>;
        })}
      </ScrollView>
      <TouchableOpacity onPress={stopListening}>
        <Text>Stop Listening</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VoiceRecognition;
