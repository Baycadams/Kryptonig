import React from 'react';
import './Home.css'

const More = ()=>{

    return(
        <div className='more'>
            <h3>Wanna know more?</h3>
            <p>Join our Waitlist to be updated on our product and how you can be part of it!!!</p>
                <div className="email">
                    <form action="" method="POST"  id="email-form">
                        <input type="email" name="" id=""  placeholder='Email Address'/>
                        <button>Submit</button>
                    </form>
                    <div class="email-success"></div>
                </div>
        </div>
    )
}
export default More