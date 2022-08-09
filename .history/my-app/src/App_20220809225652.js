import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//       {/* <a href="boxtest.html"><button> box test </button></a>
//       <a href="weather.html"><button>  weathertest </button></a>
//       <a href="LocationBasedAR.html"><button>  locationtest </button></a>
//       <a href="LocationBasedAR copy.html"><button>  locationtest1 </button></a>
//       <a href="LocationBasedAR copy2.html"><button>  locationtest2 </button></a>
//       <a href="LocationBasedAR copy3.html"><button>  locationtest3 </button></a> */}
//     </div>
//   );
// }

// export default App;
export default function App() {
  return (
    <div>
      <h1>IBM AR ART</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/BoxTest">BoxTest</Link> |{" "}
        <Link to="/WeatherTest">WeatherTest</Link> |{" "}
        <Link to="/LocationBasedAR">LocationBasedAR</Link>
        <a href="weather.html">点击跳转到静态页面</a>
      </nav>
    </div>
  );
}
