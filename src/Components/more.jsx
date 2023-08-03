import React from 'react';
import './Home.css'
import { FaChevronDown } from 'react-icons/fa';

const More = ({darkMode})=>{

    return(
        <div className='principles' >
           <h3 className={darkMode ? "principles-header-dark" : "principles-header"}>Principles</h3>
           <div className={darkMode ? "principle-container-dark": 'principle-container'}>
                <div className={darkMode ? "principle-dark" : "principle"}>
                    <h2>Integrity</h2>
                    <p>Integrity is the foundation of our company, and we are committed to upholding the highest ethical standards in all our business practices.</p>

                </div>
                <div className={darkMode ? "principle-dark" : "principle"}>
                    <h2>Innovation</h2>
                    <p>At kryptonig, we never stop exploring new ideas and pushing boundaries to develop innovative solutions that meet the evolving needs of our users.</p>
                    
                </div>
                <div className={darkMode ? "principle-dark" : "principle"}>
                    <h2>User Focus</h2>
                    <p>At Kryptonig, we place our users at the center of everything we do, and we are dedicated to providing exceptional experiences that exceed their expectations.</p>
                    
                </div>
           </div>

           <p className={darkMode ? "hiring-dark" : "hiring"}>HIRING</p>
           <h3 className={darkMode ? "role-header-dark" : "role-header"}>Open Roles</h3>
           <div className="bgcolor">
           <div className="roles-card-container">
                <div className={darkMode ? "roles-card-dark" : "roles-card"}>
                        <h3>Full Stack Engineer</h3>
                        <p>Full time</p>
                        <h5>You will be expected to lead the company’s entire development framework</h5>
                        <h4>Apply Now</h4>
                </div>
                <div className={darkMode ? "roles-card-dark" : "roles-card"}>
                        <h3>Full Stack Engineer</h3>
                        <p>Full time</p>
                        <h5>You will be expected to lead the company’s entire development framework</h5>
                        <h4>Apply Now</h4>
                </div>
                <div className={darkMode ? "roles-card-dark" : "roles-card"}>
                        <h3>Full Stack Engineer</h3>
                        <p>Full time</p>
                        <h5>You will be expected to lead the company’s entire development framework</h5>
                        <h4>Apply Now</h4>
                </div>
                <div className={darkMode ? "roles-card-dark" : "roles-card"}>
                        <h3>Full Stack Engineer</h3>
                        <p>Full time</p>
                        <h5>You will be expected to lead the company’s entire development framework</h5>
                        <h4>Apply Now</h4>
                </div>
                <div className={darkMode ? "roles-card-dark" : "roles-card"}>
                        <h3>Full Stack Engineer</h3>
                        <p>Full time</p>
                        <h5>You will be expected to lead the company’s entire development framework</h5>
                        <h4>Apply Now</h4>
                </div>
                <div className={darkMode ? "roles-card-dark" : "roles-card"}>
                        <h3>Full Stack Engineer</h3>
                        <p>Full time</p>
                        <h5>You will be expected to lead the company’s entire development framework</h5>
                        <h4>Apply Now</h4>
                </div>
           </div>
           <div className={darkMode ? "see-more-dark" : "see-more"}>
            <p>See More</p>
            <FaChevronDown className={darkMode ? 'arrow-down-dark' : 'arrow-down'} />
           </div>
           </div>
            
        </div>
    )
}
export default More