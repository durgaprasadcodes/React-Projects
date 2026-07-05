import React from "react";
import './BG.css'
import { useEffect,useState } from "react";
export default function Color(){

    let [color,SetColor]=useState("#cfcccc");

    function Changecolor(bgcolor){
        SetColor(bgcolor);
    }
    return(
        <>
        <body  style={{background:color}}>
            
        </body>
        <div className="container">
            <button onClick={()=>SetColor('blue')} id="blue">Blue</button>
            <button onClick={()=>SetColor('black')} id="black">Balck</button>
            <button onClick={()=>SetColor('red')} id="red">Red</button>
            <button onClick={()=>SetColor('#ad45f8')} id="violet">Violet</button>
            <button onClick={()=>SetColor('yellow')} id="yellow">Yellow</button>
            <button onClick={()=>SetColor('#4af70b')} id="green">green</button>
            <button onClick={()=>SetColor('cyan')} id="cyan">cyan</button>
            <button onClick={()=>SetColor('pink')} id="pink">pink</button>
        </div>
        </>
    )
} 