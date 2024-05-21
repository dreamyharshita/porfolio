import React,{useRef} from "react";
import PagesHeader from "../Components/PagesHeader/PagesHeader";
import './CSS/Contact.css';

import { Card} from "react-bootstrap";

const Contact=()=>{

    const nameRef=useRef();
    const emailRef=useRef();
    const messageRef=useRef();
   
    const handleData=async (event)=>{
     event.preventDefault();
     if(emailRef.current.value==="" || messageRef.current.value===""
     || nameRef.current.value==="")
     {
      alert("Fill all the fields");
     }
     else{
        const res= await fetch('https://portfolio-d383f-default-rtdb.firebaseio.com/messageDataRecords.json',{
            method:"POST",
            Headers:{
              "Content-Type":"application/json",
                
            },
            body:JSON.stringify({
              email:emailRef.current.value,
              name:nameRef.current.value,
              message:messageRef.current.value
            })
            
          })
          if(res){
              alert("sent");
              emailRef.current.value="";
              nameRef.current.value="";
              messageRef.current.value="";
      
          }
          else{
           alert("Try again")
          }
           
     }
     

    }
    return (
        <div className="contact_wrapper" class="bg-gradient-to-r from-purple-900 to-indigo-400 ...">
        <PagesHeader headerText="Contact"/>
        <Card className="form_card" style={{backgroundColor:"pink"}}>
            <form>
        <label>Your Name</label>
        <input ref={nameRef} type="text"></input>
        <label>Your Email</label>
        <input ref={emailRef} type="email"></input>
        <label>Message</label>
        <textarea ref={messageRef} row="10" cols="5"></textarea>
        <button className="btn_send" onClick={handleData}>Send</button>
        </form>
       
       
        </Card>
        </div>
    )
    }
export default Contact;