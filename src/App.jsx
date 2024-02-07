import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import Pic from "./components/Teams/Pic";
import Team from "./components/Teams/Team";
import Technical from "./components/Teams/Technical";
import Sports from "./components/Teams/Sports";
import Management from "./components/Teams/Management";
import Cultural from "./components/Teams/Cultural";

import Back from "./components/Home/Back";
import ModelBack from "./components/Home/ModelBack";
import Footer from "./components/Footer/Footer";
import New from "./components/Projects/New";
import Pro from "./components/Projects/Pro";




function App() {
  useEffect(() => { 
    AOS.init({
      duration: 1000, // Animation duration
    });
  }, []);

  return (
    <>
      <ModelBack />
    {/* <Back /> */}
    {/* <New /> */}
{/* <Pic/> 
  <Team/>   */}
   {/* <Technical/>   */}
  <Management/>
 <Sports/>
  <Cultural/>
  {/* <NewsLetter/>  */}
  {/* <Gallery />*/}
  {/* <Footer/>    */}
  {/* <ProjectCard /> */}
  {/* <Test /> */}
  {/* <AboutUs /> */}
  {/* <ImageEffect /> */}


    </> 
  );
}

export default App;
