const reducer = (state , action) =>{
    if (action.type=== "HOME_UPDATE"){
        return {
            ...state,
            image:action.payload.image,
        };
    } 
    

    //about
    if (action.type=== "ABOUT_UPDATE"){
        return {
            ...state,
            image:action.payload.image,
        };
    } 
    
    return state;
}; 

export default reducer;