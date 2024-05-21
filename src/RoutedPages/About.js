import React from "react";
import PagesHeader from './../Components/PagesHeader/PagesHeader'


import './CSS/About.css';
const About=()=>{
    return (
        <div className="about" class="bg-gradient-to-r from-purple-900 to-indigo-400 ...">
        <section id="about" >
           
             <PagesHeader headerText="About Me"/>
             <div className="about_content">
            
             <p>
             I'm a frontend developer proficient in HTML, CSS, and JavaScript, with expertise in React. Passionate about staying updated with the latest trends.
             </p>
             <div className="about_desc">
           
                <span  class="hover:animate-pulse">Web Developer</span>
            <span class="hover:animate-pulse">ReactJS Developer</span>
             </div>
             </div>
            
             
        </section>
        </div>
    )
}

export default About;