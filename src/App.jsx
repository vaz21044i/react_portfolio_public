

import "./index.css";
import Navbar from "./components/Navbar";

import { motion, useScroll } from "framer-motion";


function App() {
  const { scrollYProgress } = useScroll();
  return (
    <>
    <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <Navbar />
    
    </>
  );
}

export default App;
