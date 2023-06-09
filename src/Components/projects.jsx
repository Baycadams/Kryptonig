import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css'




const Projects = ()=>{


    return(
       <div className="projects">
           <h3>Projects on our Radar</h3>
           <div class="project-slides reveal-img">
                    <NavLink to=''>
                    <div className="project1">
                        <div class="project-img">
                            <img src="images/project1.jpg" alt="" />
                        </div>
                        <div className="hold">
                            <p className="ret">THE EFFECT OF CHIAROSCURO</p>
                            <p class="ips">Creating art with light and shade, also known as chiaroscour,add an extra dimension to the work. it helps the viwers
                            eyes <span>Readmore.... </span>
                            </p>
                        </div>
                    </div>
                    </NavLink>
                    
                    <NavLink to=''>
                    <div className="project1">
                        <div class="project-img">
                            <img src="images/project2.jpg" alt="" />
                        </div>
                        <p className="ret">THE BLACK AND WHITE PROJECT</p>
                        <p class="ips">whiteboy in a black nation is a graphics painting, it depicts a boy with a balencleva standing in an open field 
                            on an open field on a hillside. <span>Readmore.... </span>
                            
                        </p>
                    </div>
                    </NavLink>
              </div>
       </div>
    )
}
export default Projects