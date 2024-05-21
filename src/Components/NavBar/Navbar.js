import React, { useState } from "react";

import {FaBars} from 'react-icons/fa';
import {HiX} from 'react-icons/hi';
import './Navbar.css';

const data=[{
    label:'HOME',
    to:'#home'
},
{
    label:'ABOUT ME',
    to:'#about'
},
{
    label:'SKILLS',
    to:'#skills'
},

{
    label:'PROJECTS',
    to:'#projects'
    },
{
    label:'CONTACT',
    to:'#contact'
}
]
const Navbar=()=>{

    const [toggleIcon, setToggleIcon]=useState(false);

    const handleToggleIcon=(e)=>{
        e.preventDefault();
       const list=document.querySelector('ul');
      console.log(list.classList);
       list.classList.remove('display-flex');
  setToggleIcon(!toggleIcon);
    }


return <div>
    <nav className="navbar">
        <div className="nav_left">
        <a href="#home">
        <img className="img" src="https://cdn.pixabay.com/photo/2016/02/18/07/09/social-1206610_1280.png" alt="profile_photo"></img>
        </a>
        <div style={{display:"flex",flexDirection:"row"}}> 
        <a  href="https://www.linkedin.com/in/harshita-g-77103b257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><img style={{width:"2.5rem",  height:"2.5rem",borderRadius:"1rem",marginTop:"2rem",marginRight:"1rem"}} src="https://th.bing.com/th?id=OIP.PLeKSnhFM6BtTs_N1QVAFAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"></img></a>
        <a href="https://github.com/dreamyharshita" target="_blank"><img style={{width:"2.5rem",  height:"2.5rem",borderRadius:"1rem",marginTop:"2rem"}} src="https://th.bing.com/th/id/OIP.NGIDdVP6vw9ue_D-mrEVFQHaHa?w=158&h=180&c=7&r=0&o=5&pid=1.7"></img></a>
        </div>
        </div>

        
        <div className="nav_right">
            <ul className={`ul${toggleIcon ? "display" : ""}`}>
        {data.map((item,key)=>{
            return <li key={key} className="item">
                <a href={item.to} className="link_item">{item.label} </a></li>
        }

        )}
      {/*<li><button className="btn_resume">RESUME</button></li>*/}
        </ul>
       
        <div className="nav-icon" onClick={handleToggleIcon}>
{toggleIcon ? <HiX style={{color:"beige"}} size={30} /> : <FaBars style={{color:"beige"}} size={30}/>}
        </div>

        </div>
    </nav>
</div>
}

export default Navbar;