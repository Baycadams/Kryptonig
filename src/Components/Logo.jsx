import React from 'react';
import './Home.css';

const Logo = ({darkMode})=>{

    return(
        <div className={darkMode ? "contact-form-section-dark" : "contact-form-section"}>
            <h3>Get in Touch</h3>
            <p>Feel free to contact us any time. We will get back to you as soon as we can!</p>
            <div className="form-container">
                <form className='form-width' action="submit">
                    <input required  type="text" placeholder='Name' className={darkMode ? 'contact-field-dark' : 'contact-field'} />
                    <input  required type="text" placeholder='Email' className={darkMode ? 'contact-field-dark' : 'contact-field'} />
                    <input required  type="text" placeholder='Message' className={darkMode ? 'contact-field-dark' : 'contact-field'} />
                    <button className="input-button">SEND</button>
                </form>
            </div>

        </div>
    )
}
export default Logo