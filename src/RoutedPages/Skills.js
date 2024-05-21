import React from "react";
import PagesHeader from "../Components/PagesHeader/PagesHeader";
import './CSS/Skills.css';

const Skills=()=>{
    return (
        <div className="skills_wrapper" class="bg-gradient-to-r from-indigo-400 to-purple-900 ...">
        <PagesHeader headerText="Skills"/>
        <span className="skills_set">
            <img class="hover:animate-bounce" style={{width:"6rem", backgroundColor:"white" ,height:"6rem" ,borderRadius:"2rem"}} alt="HTML" src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png">
               </img>
               <img class="hover:animate-bounce" style={{width:"6rem", backgroundColor:"white",height:"6rem" ,borderRadius:"2rem"}} alt="CSS" src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png">
               </img>
               <img class="hover:animate-bounce" style={{width:"6rem", height:"6rem" ,borderRadius:"2rem"}} alt="JS" src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_640.png">
               </img>
               <img class="hover:animate-bounce" style={{width:"6rem", height:"6rem",borderRadius:"2rem"}} alt="React" src="https://th.bing.com/th?id=OIP.8crMZH-4uR1-cBNC3g5cfAHaHw&w=244&h=255&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2">
               </img>
               
               <img class="hover:animate-bounce" style={{width:"6rem", height:"6rem",borderRadius:"2rem"}} alt="Redux" src="https://th.bing.com/th/id/OIP.gYHvWqBlUWh2YDdZLZDrjAHaHX?w=187&h=186&c=7&r=0&o=5&pid=1.7">
               </img>
               <img class="hover:animate-bounce" style={{width:"6rem", height:"6rem" ,borderRadius:"2rem"}} alt="Bootstrap" src="https://th.bing.com/th/id/OIP.5laPXOWt_0Cs4gbdMESc3AHaHa?w=187&h=187&c=7&r=0&o=5&pid=1.7">
               </img>
               <img class="hover:animate-bounce" style={{width:"6rem", height:"6rem",borderRadius:"2rem"}} alt="Tailwind" src="https://th.bing.com/th/id/OIP.W_Louhgy0qKrsRO8YfURpQHaHa?w=162&h=180&c=7&r=0&o=5&pid=1.7">
               </img>
               <img class="hover:animate-bounce" style={{width:"6rem", height:"6rem" ,borderRadius:"2rem"}} alt="GitHub" src="https://th.bing.com/th/id/OIP.Xa0BEkwl0Zx4qnY9lMbD7gHaHa?w=176&h=180&c=7&r=0&o=5&pid=1.7"/>

        </span>
        </div>
    )
}

export default Skills;