import React from "react";
import './CSS/Home.css';
import Navbar from './../Components/NavBar/Navbar.js';
import About from './About';
import Skills from './Skills';

import Contact from './Contact';
import Projects from './Projects';

import { Animate } from "react-simple-animate";



const Home=()=>{

    
  
    return (
        <div className="main_wrapper">
        <Navbar/>
        <section id="home" className="home">
         <div className="home_text">
          <h1>
            Hello, I'm Harshita
            <br/>
            FrontEnd Developer
          </h1>
          <Animate play duration={1} delay={1} start={{
            transform:'translateY(55rem)'
          }} end={{transform:'translateX(0)'}}>
          <div className="hireMe_contact">
         <a href="#contact"><button className="btn_home" >Hire me</button></a> 
         </div>
          </Animate>
        
         </div>
        </section>
       
        <section id="about">
      <About/>
        </section>
        <section id="skills">
      <Skills/>
        </section>
        <section id="projects">
      <Projects/>
        </section>
       
        <section id="contact">
      <Contact/>
        </section>
        </div>
    )
}

export default Home;