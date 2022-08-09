// import 'aframe';
// import 'aframe-particle-system-component';
import {Entity, Scene} from 'aframe-react';
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

  let dom = h('a-scene', {
    background: 'color:#CCC'
}, [
    h(assets),
    h(env),
    h(lights),
    h(cam),
    h(linkBox, {
        position: '-5 0 -7',
        size: size,
        text: 'show',
        color: '#FAF',
        href: 'p/show.html',
        label:'表演台'
    }),
    h(linkBox, {
        position: '0 0 -7',
        size: size,
        text: 'train',
        color: '#AAF',
        href: 'p/train.html',
        label:'训练场',
    }),
    h(linkBox, {
        position: '5 0 -7',
        size: size,
        text: 'learn',
        color: '#AFA',
        href: 'p/learn.html',
        label:'学习营'
    }),
    h(linkBar, {
        position: '-0.6 -1.1 -2',
        color: '#6F6',
        href: 'p/login.html',
        label:'登录注册'
    }),
    h(linkBar, {
        position: '0.6 -1.1 -2',
        color: '#F86',
        href: 'p/about.html',
        label:'探索故事'
    }),
])