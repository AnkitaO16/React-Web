// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import HeroSection from "./component/HeroSection";
import { useGlobalContext } from "./context";

const Company = () => {
    
    const {updateHomePage} = useGlobalContext( );
    
    useEffect(() =>updateHomePage(),[]);
    
    return (
    < HeroSection />
    )
};

export default Company ;