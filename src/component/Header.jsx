// eslint-disable-next-line no-unused-vars
import React from 'react'
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import images from '../images/logoIcon.jpg';
import { styled } from 'styled-components';
import NavBarTop from './NavBarTop';

const Header = () => {
  return (
    <>
    
    
    <MainHeader>
  
      <NavBarTop />

      <NavLink to="/">
        <img src={images} alt="logo" className='logo' />
      </NavLink>

    </MainHeader>
    < Navbar />
    <MainHeader>

      </MainHeader>
      
      </>
  );
};

const MainHeader = styled.header `
padding: 0 4.8rem;
height: 10rem;
margin-left: 999px;
display: flex;
justify-content: space-between;
//align-items: center;
color: White;
border: 0.0625rem solid ;


.logo {
  position:absolute;
   height:130px;
    max-width:50%;
    margin-left: -1189px;
    margin-top: -15px;

    &:hover,
              &:active{
                border:#0b5394 solid;
                border-radius:100%;
                color:#0b5394;
                
              }  
}



`;

export default Header;