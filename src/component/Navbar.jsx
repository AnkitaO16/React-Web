// eslint-disable-next-line no-unused-vars
import React from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
const NavBar = () => {

    const Nav= styled.nav`

*{
    margin: -4px;
    padding: 4px;
    box-sizing: border-box;
    align-item:left;
    
}



   
    .navbar-list {
        display:flex;
        gap: 4.8rem;
        font-size: 16px;
        margin-left: 205px;
    margin-top: -60px;
        
        li{
            list-style:none;

               .navbar-link{
                  float:left;

                       &:link,
                       &:visited{
                    
                    text-decoration:none;
                    font-size:1.2rem;
                   
                    color:${({theme}) => theme.colors.black};
                    transition:color 0.3s linear;
                }

               
              &:hover,
              &:active{
                border:#0b5394 solid;
                border-radius:80%;
                color:#0b5394;
                
              }  
        }
       }
      

    
    }`;
  return (
    <Nav>
        <div className='menu-Icon'>

            <ul className="navbar-list">
                <li>
                    <NavLink className="navbar-link" to="/">Company</NavLink>
                </li>
                <li>
                    <NavLink className="navbar-link" to="/about">About Us</NavLink>
                </li>
                <li>
                    <NavLink className="navbar-link" to="/products">Products</NavLink>
                </li>
                <li>
                    <NavLink className="navbar-link" to="/">Services</NavLink>
                </li>
                <li>
                    <NavLink className="navbar-link" to="/">Blogs</NavLink>
                </li>
                
                
            </ul>
        </div>
    </Nav>
  );



};




export default NavBar;







