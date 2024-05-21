import React from "react";
import PagesHeader from "../Components/PagesHeader/PagesHeader";
import { Button, Card } from "react-bootstrap";
import mailBox from './../ProjectImages/mailBox.png';
import generics from './../ProjectImages/generics.png';
import portfolio from './../ProjectImages/portfolio.png';
import restaurant from './../ProjectImages/restaurant.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/Projects.css';

const projectsData=[{
    title:"Mailbox",
    description:"hhhjjkkk",
    image: mailBox,
    demo:"https://comforting-cucurucho-83234b.netlify.app/",
    github:"https://github.com/dreamyharshita/mailbox"
},
{
  title:"Portfolio",
  description:"hhhjjkkk",
  image: portfolio,
  demo:"https://664c427f56a6519a9308f642--statuesque-starship-0e3b13.netlify.app/",
  github:"https://github.com/dreamyharshita/mailbox"
},

{
  title:"Generic Store",
  description:"hhhjjkkk",
  image: generics,
  demo:"https://aesthetic-bubblegum-e67773.netlify.app/",
  github:"https://github.com/dreamyharshita/Ecommerce-Project"
},
{
    title:"Food Ordering Page",
    description:"hhhjjkkk",
    image:restaurant,
    demo:"https://majestic-biscochitos-a40f5f.netlify.app/",
    github:"https://github.com/dreamyharshita/Food_Ordering"
},

]
const Projects=()=>{
    return (
        <div className="projects_wrapper" class="bg-gradient-to-r from-purple-900 to-indigo-400 ...">
        <PagesHeader headerText="Projects"/>
        <div className="projects">
            {projectsData.map((project)=>{
              return ( <Card className="project" style={{ width: '20rem' ,marginRight:"4rem"}}>
              <Card.Img variant="top" alt="Project-Image" src={project.image}  />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>
                  {project.description}
                </Card.Text>
              <a target="_blank" href={project.demo}>  <Button variant="primary" style={{marginRight:"1rem",backgroundColor:"indigo"}}>Demo</Button></a>
                <a target="_blank"  href={project.github}><Button variant="primary" style={{marginRight:"1rem",backgroundColor:"indigo"}}>GitHub</Button></a>
              </Card.Body>
            </Card>)
            })}
        
        </div>
        </div>
    )
}

export default Projects;