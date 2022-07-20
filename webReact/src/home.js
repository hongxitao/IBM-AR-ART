import './css/index.css';
import './fa/css/all.min.css'
import think from './img/think.png';
import Chabot from './component/chatbot.js';


function App() {
    return (
        <body>
            <header className="top-bar">
                <div className="menu-btn">
                    <i className="fas fa-stream"></i>
                </div>
                <h1 className="logo">
                    IBM
                </h1>
                <div className="search-btn">
                    <i className="fas fa-search"></i>
                </div>
            </header>

            <div className="banner ">
                <img src={think} alt="" />
            </div>

            <div className="artworks-list">
                <div className="title">
                    <h2>Art works</h2>
                    <a className="more" href="more.html">More+ </a>
                </div>
                <div className="item-list" id="artwork-list"></div>
            </div>

            <div>
                <center>
                    <button className="scan_btn">Scan</button>
                </center>
            </div>
        </body>
    );
}

export default App;
