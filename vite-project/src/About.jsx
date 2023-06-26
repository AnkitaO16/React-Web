// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import HeroSection from "./component/HeroSection";
import { useGlobalContext } from "./context";
//import zeus from "./images/Zeus components.png";


const About = () =>
{
    const {updateAboutPage} = useGlobalContext();

useEffect(() =>updateAboutPage(),[]);
    return< HeroSection />    

};

export default About;
