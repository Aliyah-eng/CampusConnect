import logo from './logo.svg';
import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import AnimatedBox from "../src/Component/Animation/Animation"
import { useEffect } from 'react';


function App() {
    useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <AnimatedBox />
  );
}

export default App;
