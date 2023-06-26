// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';

const Support = () => {
const Wrapper= styled.section`
padding:9rem 0 5rem 0;

.container{
  margin-top:6rem;
  text-align:center;

  .contact-form{
    max-width:50rem;
    margin:auto;

.contact-input{
  display:flex;
  flex-direction:column;
  gap:3rem;
  input[type="submit"]{
    cursor:pointer;
    transition: all 0.2s;

    &:hover{
      background-color:${({theme}) => theme.colors.white};
      border: 1px solid ${({theme}) => theme.colors.btn};
      color:${({theme}) => theme.colors.btn};
      transition:scale(0.9);
    }
  }
}

}
}
`;

  return (
    <Wrapper>
      <h2 className='common-heading'> Contact Us!</h2>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d666251.2998178917!2d-123.72089708168738!3d49.28503457209451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5462ce9005f9dfa5%3A0xce9c6c979ef4fca6!2sMetro%20Vancouver%2C%20BC%2C%20Canada!5e0!3m2!1sen!2sin!4v1686461189951!5m2!1sen!2sin"
       width="100%" 
       height="450" 
       style={{border:0}} 
       allowFullScreen="" 
       loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"></iframe>

    <div className="container">
      <div className="contact-form">
        <form action="https://formspree.io/f/mqkovrep" method="POST" className="contact-input">
          <input type="text"
           name="username" 
          placeholder="username" 
          autoComplete="off" 
          required/>
          <input type="email"
           name="Email" 
          placeholder="Email" 
          autoComplete="off" 
          required/>
          <textarea name="Message"
          placeholder="Have Something in Mind, Tell Us"
          cols="30" rows="6"
          autoComplete="off" 
          required></textarea>
          <input type="submit"
           value="send"/>
        </form>
      </div>
    </div>



    </Wrapper>
  )
};
export default Support;