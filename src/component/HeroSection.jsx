/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { styled } from "styled-components";
import banner from "../images/banner.jpg"
import hr from "../images/hr-r.jpg";
import task from "../images/task-r.jpg";
import sales from "../images/sales-r.jpg";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";

import {  useGlobalContext } from "../context";

 const HeroSection = () => {

const {/*image*/} = useGlobalContext();

    return (
   <Wrapper>

<div className="container grid grid-one-column">
        {/*for hero image*/}
    <div className="section-hero-image">
<picture>

    <img src={banner} alt="Devroot"  className="hero-banner" />
    <div className="centered"><i> Devroots is a software-as-a-service (SaaS) organization with the objective of bridging the divide among teams, assisting businesses in making informed decisions
     through the utilization of ZEUS-generated reports, and attaining their desired outcomes.</i></div>
</picture>
    </div>
</div>
<div className="container grid grid-two-column">
    <div className="section-hero-data">
     <p className="hero-top-data">
        </p>
     <h1 className="hero-heading">
        HR Ops</h1>
     <p className="hero-para">
     At Devroots we understand the challenges that businesses face when it comes to managing their human resources effectively. 
     Our comprehensive suite of HR solutions is designed to address these challenges head-on and help you build a thriving, engaged, and productive workforce.
     Our HR solutions are tailored to meet the unique needs of your organization, whether you are a small startup, a growing mid-sized company, or a large enterprise. With our expertise and cutting-edge technology, we provide innovative solutions that streamline your HR processes, drive strategic decision-making, and create a positive employee experience.
        </p>
        <Button className="btn contact-btn">
            <NavLink to="/contact">
                Contact us
            </NavLink>

        </Button>
    </div>
    {/*for hero image*/}
    <div className="section-hero-image">
<picture>
    <img src={hr} alt="Devroot"  className="hero-img" />
</picture>
    </div>
</div>

{/* for hero data 2*/}
<div className="container grid grid-two-column">
{/*for hero image*/}
<div className="section-hero-image">
<picture>
    <img src={task} alt="Devroot"  className="hero-img" />
</picture>
    </div>

    <div className="section-hero-data">
     <p className="hero-top-data">
        </p>
     <h1 className="hero-heading">
        TASK Ops</h1>
     <p className="hero-para">
     Welcome to our AI-Powered IT Ticketing Solutions, we believe in harnessing the power of artificial intelligence to revolutionize IT ticket management, Project Management and Performance reviews. Our innovative solution combines technology with robust features to optimize your IT support processes, manage multiple projects and enhance performance evaluation.
     Our advanced algorithms analyze ticket data, identify patterns, and provide intelligent recommendations for faster problem-solving. Say goodbye to manual ticket sorting and hello to automated ticket routing based on AI-driven insights.

        </p>
        <Button className="btn contact-btn">
            <NavLink to="/contact">
                Contact us
            </NavLink>

        </Button>
    </div>
    
</div>

{/* for hero data3*/}
<div className="container grid grid-two-column">
    <div className="section-hero-data">
     <p className="hero-top-data">
        </p>
     <h1 className="hero-heading">
        SALES Ops</h1>
     <p className="hero-para">
     Our comprehensive solution integrates subscription management, invoice generation, and a powerful
      payment platform to streamline your sales processes and maximize revenue. Simplify subscription management, automate invoice generation, and offer seamless payment options to enhance customer experience. 
     Unlock the potential of your sales operations with our all-in-one software solution.
        </p>
        <Button className="btn contact-btn">
            <NavLink to="/contact">
                Contact us
            </NavLink>

        </Button>
    </div>
    {/*for hero image*/}
    <div className="section-hero-image">
<picture>
    <img src={sales} alt="Devroot"  className="hero-img" />
</picture>
    </div>
</div>


   </Wrapper>
   )

    
 } ;

 const Wrapper = styled.section`
 
 padding: 9rem 0;
  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .btn {
    max-width: 12rem;
  }
  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }
  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }
  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }
  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  picture {
    text-align: center;
  }
  .hero-img {
    width: 500px;
  }
  @media (max-width: 600px) {
    .grid {
      gap: 7.2rem;
    }
    size: 25px;
    }
    
  }
 
 `;



 export default HeroSection;