// eslint-disable-next-line no-unused-vars
import React, { useContext, useReducer } from "react";
import reducer from "./reducer";


const AppContext = React.createContext();

const initialState = {
    image:"",
};



// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => {
const [state, dispatch] = useReducer(reducer, initialState);


const updateHomePage = () => {
    return dispatch (
        {
            type:"HOME_UPDATE",
            payload:{
                image:"./images/banner.jpg",
            },
        });
};

const updateAboutPage = () => {
    return dispatch (
        {
            type:"ABOUT_UPDATE",
            payload:{
                image:"./images/about.jpg",
            },
        });
};

    return (
    <AppContext.Provider value={ {...state , updateHomePage  , updateAboutPage} }>
        {children}
    </AppContext.Provider>
    );
};


//global hook

const useGlobalContext = () =>{
    return useContext(AppContext);
};

export {AppContext, AppProvider , useGlobalContext};

