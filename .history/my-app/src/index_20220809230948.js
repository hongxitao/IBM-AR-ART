import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import BoxTest from "./BoxTest";
import WeatherTest from "./WeatherTest";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LocationBasedAR from './LocationBasedAR';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="BoxTest" element={<BoxTest />} />
      <Route path="WeatherTest" element={<WeatherTest />} />
      <Route path="LocationBasedAR" element={<LocationBasedAR/>} />
    </Routes>
  </BrowserRouter>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


