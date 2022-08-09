// import 'aframe';
// import 'aframe-particle-system-component';
// import {Entity, Scene} from 'aframe-react';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import ReactDOM from 'react-dom/client';

export default function WeatherTest() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Weather Test</h2>
        <button>
        Click to Add Weather
        </button>
        <Scene>
        <Entity geometry={{primitive: 'box'}} material={{color: 'red'}} position={{x: 0, y: 0, z: -5}}/>
        <Entity particle-system={{preset: 'snow'}}/>
        <Entity light={{type: 'point'}}/>
        {/* <Entity gltf-model={{src: 'virtualcity.gltf'}}/> */}
        <Entity text={{value: 'Hello, WebVR!'}}/>
        </Scene>
      </main>
    );
  }

// class VRScene extends React.Component {
//   render () {
//     return (
      // <Scene>
      //   <Entity geometry={{primitive: 'box'}} material={{color: 'red'}} position={{x: 0, y: 0, z: -5}}/>
      //   <Entity particle-system={{preset: 'snow'}}/>
      //   <Entity light={{type: 'point'}}/>
      //   <Entity gltf-model={{src: 'virtualcity.gltf'}}/>
      //   <Entity text={{value: 'Hello, WebVR!'}}/>
      // </Scene>
//     );
//   }
// }

// ReactDOM.render(<VRScene/>, document.querySelector('#sceneContainer'));
