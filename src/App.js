import './App.scss';
import {Routes, Route, useLocation} from 'react-router-dom';

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Skills from './Containers/skills';
import Home from "./Containers/home";
import About from "./Containers/about";
import Portfolio from "./Containers/portfolio";
import Resume from './Containers/resume';
import Contact from "./Containers/contact";
import Navbar from './Components/navBar';
//import PageHeaderContent from './Components/pageHeaderContent';
import particles from "./utils/particles";

function App() {
  const location = useLocation();
  console.log(location);

  const handleInit = async (main) => {
    await loadFull(main);
  };

  const renderParticleJsInHomePage = location.pathname === "/";
  return (



  
    <div className="App">
         {renderParticleJsInHomePage && (
        <Particles id="particles" options={particles} init={handleInit} />
      )}

     


      <Navbar />
      <div className='"App__main-page-content'>

      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
    
      
    </div>
  );
}

export default App;
