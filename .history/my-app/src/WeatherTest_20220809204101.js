// import 'aframe';
// import 'aframe-particle-system-component';
import {Entity, Scene} from 'aframe-react';
import h from "react-hyperscript"
// import React from 'react';
// import ReactDOM from 'react-dom';
// import ReactDOM from 'react-dom/client';

let dom = h('a-scene', {
  background: 'color:#CCC'
}, [
  h(linkBox, {
      position: '-5 0 -7',
      size: size,
      text: 'show',
      color: '#FAF',
      // href: 'p/show.html',
      label:'表演台'
  }),
  h(linkBox, {
      position: '0 0 -7',
      size: size,
      text: 'train',
      color: '#AAF',
      // href: 'p/train.html',
      label:'训练场',
  }),
  h(linkBox, {
      position: '5 0 -7',
      size: size,
      text: 'learn',
      color: '#AFA',
      // href: 'p/learn.html',
      label:'学习营'
  }),
  h(linkBar, {
      position: '-0.6 -1.1 -2',
      color: '#6F6',
      // href: 'p/login.html',
      label:'登录注册'
  }),
  h(linkBar, {
      position: '0.6 -1.1 -2',
      color: '#F86',
      // href: 'p/about.html',
      label:'探索故事'
  }),
])

export default function WeatherTest() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Weather Test</h2>
        <button>
        Click to Add Weather
        </button>
      </main>,
      dom
    );
  }

