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
                        <h3>Blockchain Developer</h3>
                        <p>Full time</p>
                        <h5>Advanced proficiency in programming languages, such as C++, Java, Solidity and Python with at least 2 years experience.</h5>
                        <h4>Apply Now</h4>
                </div>
                <div className={darkMode ? "roles-card-dark" : "roles-card"}>
                        <h3>React Developer</h3>
                        <p>Full time</p>
                        <h5>You will be expected to develop new user-facing features using React.js and optimize components for maximum performance across a vast array of web-capable devices and browsers</h5>
                        <h4>Apply Now</h4>
                </div>
                <div className={darkMode ? "roles-card-dark" : "roles-card"}>
                        <h3>Graphic Designer</h3>
                        <p>42 Hrs/week</p>
                        <h5>We are looking for a creative individual to join our expanding in-house design and marketing team! This person would be directly involved in the development and execution of marketing and branding initiatives across various channels. It's an exciting time to join this team!</h5>
                        <h4>Apply Now</h4>
                </div>
                <div className={darkMode ? "roles-card-dark" : "roles-card"}>
                        <h3>Technical Writer</h3>
                        <p>42 Hrs/week</p>
                        <h5>Writes and edits procedural documentation such as user guides and manuals, plans writing processes and sets timelines and deadlines, and also gather feedback from customers, designers, and manufacturers to improve technical documents.</h5>
                        <h4>Apply Now</h4>
                </div>
                <div className={darkMode ? "roles-card-dark" : "roles-card"}>
                        <h3>Copywriters</h3>
                        <p>42 Hrs/week</p>
                        <h5>Creating and editing original copy that is accurate, well-researched, and meets client/company needs and deadlines as well as assisting in other aspects of the creative or research processes to create cohesive, accurate content.</h5>
                        <h4>Apply Now</h4>
                </div>
                <div className={darkMode ? "roles-card-dark" : "roles-card"}>
                        <h3>Web3 Content Strategist</h3>
                        <p>42 Hrs/week</p>
                        <h5>Analyze research, data, and trends. Create brand architecture, including messaging, logo, campaigns, and creative materials as well as conduct primary and secondary along with consumer research and update with market trends among other roles. </h5>
                        <h4>Apply Now</h4>
                </div>
                <div className={darkMode ? "roles-card-dark" : "roles-card"}>
                        <h3>Digital Marketer</h3>
                        <p>68 Hrs/week</p>
                        <h5>Develop marketing strategies that align with the organization's business goals • Manage and execute campaigns across various digital channels, including email, social media, search engines, and display advertising. Also Collaborate with cross-functional teams, including creative, content, and web development, to produce engaging content and optimize user experience.</h5>
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