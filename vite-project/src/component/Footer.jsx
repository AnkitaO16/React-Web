// eslint-disable-next-line no-unused-vars
import React from 'react'
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import { Button } from '../styles/Button';
import logo from "../images/logoIcon.jpg";


const Footer = () => {
  return (
    <>
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
        <h3>Still in Confusion!</h3>
        <h3>Talk to Us</h3>
        </div>
        <div>
          <NavLink to="/support">
            <Button>
              Connect Us
            </Button>
          </NavLink>
        </div>
        </div>
      </section>
      {/*footer section*/}

<footer>
  <div className="container grid grid-five-column">
    
    {/*Column 1*/}
    <div className="footer-about" >
      <img src={logo} alt="logo" className="footer-logo"/>
      <h3>Human Capital Management</h3>
      <h4>Human Resource</h4>
      <h4> Payroll</h4>
      <h4> Talent</h4>
      <h4> Reporting and Analytics</h4>

    </div>
  
  {/*Column 2*/}
    <div className="footer-about" >
      <h3> Workforce Management</h3>
      <h4>Time & Attendance</h4>
      <h4> Scheduling</h4>
      <h4> Compliance</h4>
    
    </div>

    {/*Column 3*/}
    <div className="footer-about" >
      <h3>Product Suites</h3>
      <h4> Devroots Pro</h4>
      <h4>Devroots Dimensions</h4>
    

    </div>
    {/*Column 4*/}
    <div className="footer-about" >
      <h3>Customer Experience</h3>
      <h4> Implementation</h4>
      <h4> Support Experience</h4>
      <h4> Devroots Community</h4>
      <h4> Customer Stories</h4>

    </div>
    {/*Column 5*/}
    <div className="footer-about" >
      <h3>About Us</h3>
      <h4>Why Devroots</h4>
      <h4> Culture</h4>
      <h4>Our ESG Program</h4>
      <h4> Leadership</h4>
      <h4>Newsroom</h4>
      <h4>Career</h4>
      <h4>Privacy and Security</h4>
    </div>
  </div>

</footer>


      </Wrapper></>
  )
};

const Wrapper= styled.section`

.contact-short{
  max-width:60vw;
  margin:auto;
  padding:5rem 10rem;
  background-color:${({theme}) => theme.colors.bg};
  border-radius:1rem;
  box-shadow:${({theme}) => theme.colors.shadowSupport};
/*  transform:translateY(50%);*/
}

.grid div:last-child{
  justisy-self:end;
  align:center;
  margin-left: 27px;
  margin-right: 5px;
}
footer{
  padding:14rem 0 9rem 0;
  background-color:#228B22;
  
 /* ${({theme}) => theme.colors.green};*/
}

.footer-logo{
  width:10%;
}


`;


export default Footer;