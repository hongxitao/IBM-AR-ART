import React from 'react';
import WatsonSpeech from "watson-speech";
const audioContext = new window.AudioContext();


function requestVoice(){
  const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
  const { IamAuthenticator } = require('ibm-watson/auth');

  const textToSpeech = new TextToSpeechV1({
    authenticator: new IamAuthenticator({
      apikey: 'GdjN0agnCaDtkn_1DGLuxxmuQOj7RWmHFbBRF2A8T2OI',
    }),
    serviceUrl: 'https://api.eu-gb.text-to-speech.watson.cloud.ibm.com/instances/8d98ae80-bfdc-4719-85de-3b1a5386ad4b',
  });

  const synthesizeParams = {
    text: 'Hello world',
    accept: 'audio/mp3',
    voice: 'en-US_AllisonV3Voice',
  };

  textToSpeech.synthesize(synthesizeParams)
    .then(buffer => {
      audioContext.decodeAudioData(buffer).then(data => console.log(data))
    })
    .catch(err => {
      console.log('error:', err);
    });
}

function requestVoice2(){
  fetch('/api/text-to-speech/token')
    .then(function(response) {
      return response.json();
    })
    .then(function(token) {
      const audio = WatsonSpeech.TextToSpeech.synthesize(Object.assign(token, {
        text: "Hello from IBM",
      }));
      audio.onerror = function(err) {
        console.log('audio error: ', err);
      };
    });
}

function audioContextCheck() {
  if (typeof AudioContext !== "undefined") {
    return new AudioContext();
  }
}

function requestVoice3(){
  var audioContext = audioContextCheck();
  var audioBuffer;


  fetch('https://api.eu-gb.text-to-speech.watson.cloud.ibm.com/instances/8d98ae80-bfdc-4719-85de-3b1a5386ad4b/v1/synthesize?text=Our%20Successful%20Stories&voice=en-US_MichaelV3Voice', {
    headers: {
      'Accept': 'audio/wav',
      'Authorization': 'Basic ' + btoa('apikey:GdjN0agnCaDtkn_1DGLuxxmuQOj7RWmHFbBRF2A8T2OI')
    }
  }).then(r => {console.log(r.body)
    r.arrayBuffer().then(r => audioContext.decodeAudioData(r).then(data => {
      audioBuffer = data
      const playSound = audioContext.createBufferSource();
      playSound.buffer = audioBuffer;
      playSound.connect(audioContext.destination);
      playSound.start(audioContext.currentTime);
    }))

  });
}

class TextToSpeech extends React.Component{
  render() {
    return(
      <button onClick={requestVoice3}>Play Voice</button>
    )
  }
}

export default TextToSpeech
