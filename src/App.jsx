import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import Pic from "./components/Teams/Pic";
import Team from "./components/Teams/Team";
import Technical from "./components/Teams/Technical";
import Back from "./components/Home/Back";
import ModelBack from "./components/Home/ModelBack";
import Footer from "./components/Footer/Footer";



function App() {
  useEffect(() => { 
    AOS.init({
      duration: 1000, // Animation duration
    });
  }, []);

  return (
    <>
    <Back />
    {/* <New /> */}
{/* <Pic/> 
  <Team/>   */}
   <Technical/>  
  {/*<Management/>
 <Sports/>
  <Cultural/>*/}
  {/* <NewsLetter/>  */}
  {/* <Gallery />*/}
  <Footer/>   
  {/* <ProjectCard /> */}
  {/* <Test /> */}
  {/* <AboutUs /> */}
  {/* <ImageEffect /> */}
  {/* <ModelBack /> */}

    </> 
  );
}

export default App;
