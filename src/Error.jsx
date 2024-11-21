// eslint-disable-next-line no-unused-vars
import React from 'react'
import styled from "styled-components";
import error from "./images/error.jpg"
import { Button } from './styles/Button';
import { NavLink } from 'react-router-dom';
 const Error = () => {
    return(
<><Wrapper>
    <img src={error} alt="Error" 
    className='error-img' />
<NavLink to="/">
    <Button className='btn'>
        Go Back
        </Button>
        </NavLink>
    </Wrapper></>
    )
 };


 const Wrapper =styled.section`
 
 padding:9rem 0;
 display:flex;
 justify-content:center;
 align-items:center;
 flex-direction:column;
 
 img.error-img {
    width: 51%;
    align-items: center;
   
    margin-top: -220px;
 }
 .btn{
    margin-top: -54px;
    width: 209px;
    background-color: rgb(21 116 234);
 }

 `;



 export default Error;