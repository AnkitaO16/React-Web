// eslint-disable-next-line no-unused-vars
import React from "react";
import Company from "./Company";
import About from "./About";
import Support from "./Support";
import Products from "./Products";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import Error from "./Error";
const App = () => {
  const theme ={
    colors:{
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      white: "#fff",
      black: " #212529",
      helper: "#8490FF",
      bg: "rgb(249 249 255)",
      footer_bg: "#0A1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#FFFFFF",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "(max-width: 768px)",
      tab: "(max-width:998px)"
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    <BrowserRouter>
    < Header />
    <Routes>
      <Route path="/" element={<Company />} />
      <Route path="/about" element={<About />} />
      <Route path="/support" element={<Support />} />
      <Route path="/products" element={<Products />} />
      <Route path="*" element={<Error />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </ThemeProvider>
  )
};
export default App;