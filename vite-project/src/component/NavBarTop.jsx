// eslint-disable-next-line no-unused-vars
import React from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
const NavBarTop = () => {

    const Nav= styled.nav`

*{
    margin: -4px;
    padding: 4px;
    box-sizing: border-box;
    align-item:left;
}


.menu-Icon .navbar-list-right{
    display: flex-right;
    gap:2rem;
}
   
    .navbar-list {
        display:flex;
        gap: 4.8rem;

        
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
                border:red solid;
                border-radius:95%;
                color:red;
                
              }  
        }
       }

    
    }`;
  return (
    <Nav>
        <div className='menu-Icon'>

            <ul className="navbar-list">
                
                
                <li>
                    <NavLink className="navbar-link" to="/">Search</NavLink>
                </li>
                <li>
                    <NavLink className="navbar-link" to="/support">Support</NavLink>
                </li>
                <li>
                    <NavLink className="navbar-link" to="/"></NavLink>
                </li>
            </ul>
        </div>
    </Nav>
  );



};




export default NavBarTop;







