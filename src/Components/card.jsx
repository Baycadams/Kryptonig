import React from 'react'
import './card.css'

const Card = ({images, darkMode}) => {
  return (
    <div className='card-container'>
          <img  src={images} alt="" />
          
          <div className="flexbox-container">
            <div>
              <p className={darkMode ? "taggs-dark" : "taggs"  }>@Johny</p>
              <p className={darkMode ? "yellow-painting-dark" : "yellow-painting"}>Yellow Painting</p>
            </div>
            <div>
              <p className={darkMode ? "current-price-dark" : "current-price"}>current price</p>
              <p className={darkMode ? "eth-price-dark" : "eth-price"}>0.005 ETH</p>
            </div>
          </div>
          <p className={darkMode ? 'lorem-ipsum1-dark': 'lorem-ipsum1'}>Lorem ipsum dolor, sit amet consectetur adipisicing. Exercitationem necessitatibus.</p>
          <p className="buy-button1">Buy</p>
    </div>
  )
}

export default Card