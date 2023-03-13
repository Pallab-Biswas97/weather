import React from "react";
import "./Css/Style.css";

const temp = "";

const Animation = () =>{
   switch(temp){
    case"sunny": return(
        <h1>Sunny</h1>
    )
    case"perfect": return(
        <h1>Perfect</h1>
    )
    default: return(
        <h1>Default</h1>
    )
   }
};


const Tempo = () =>{
    return(
        <>
            <Animation/>
        </>
    )
};
export default Tempo;