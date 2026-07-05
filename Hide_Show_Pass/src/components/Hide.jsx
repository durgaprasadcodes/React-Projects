import './show.css'
import { useEffect,useState } from 'react'

export default function Hide(){
    const [display,Setdisplay]=useState(true);
    const [icon,Seticon]= useState("🔒");
    const [state,Setstate]= useState("Password Hide");
    
    const click=()=>{
        Setdisplay(!display );
        Seticon(display ? "🔓":"🔒");
        Setstate(display?"Password Visible":"Password Hide");
    }
    
    // useEffect(()=>{},[])
    return(
        <div className="container">
            <h1>{state}</h1>
            <input type={display? "password":"text"} placeholder='Password' />
            <p onClick={click}>{icon}</p>
        </div>
    )
}