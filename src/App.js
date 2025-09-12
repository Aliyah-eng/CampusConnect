import logo from './logo.svg';
import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import AnimatedBox from "../src/Component/Animation/Animation"
import { useEffect } from 'react';


function App() {
    useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (in ms)
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <AnimatedBox />
  );
}

export default App;
