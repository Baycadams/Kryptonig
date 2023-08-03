import React from 'react';
import './About.css'

const Phone =({darkMode})=>{

    return(
        <div className='about-header'> 
            <div>
                <h5 className={darkMode ? "evolving-text-dark" : "evolving-text"}>Evolving And Creating Innovations To Accelerate The Transformation Of Blockchain Technology</h5>
                <p className={darkMode ? "create-more-access-dark" : "create-more-access"}>Our goal is to create more accessible, transparent and inclusive DAO technology that provides creators and investors greater control over wider range of blockchain assets.</p>
                <p className="open-roles"> See open roles</p>
            </div>
            <div className='about-image-container'>
                <img className='about-us-image'  src="https://firebasestorage.googleapis.com/v0/b/kryptonig.appspot.com/o/Group%2010005.png?alt=media&token=88d08aed-c14a-4cde-ac4a-752c96410896" alt="" />
            </div>
        </div>
    )
}
export default Phone