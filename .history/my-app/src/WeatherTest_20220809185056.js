// export default function WeatherTest() {
//     return (
//       <main style={{ padding: "1rem 0" }}>
//         <h2>Weather Test</h2>
//         <button>
//         Click to Add Weather
//         </button>
//       </main>
//     );
//   }

import ReactDOM from "react-dom";
import h from "react-hyperscript"
import 'aframe';

let Box=()=>{
  return h('a-box',{color:'red',position:'0 0 -4'})
}

ReactDOM.render(
  h('a-scene',{background:'color:#CCC'},[
    h(Box)
  ]),
  document.getElementById("root")
);
