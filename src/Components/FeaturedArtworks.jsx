import React from 'react'
import './FeaturedArtworks.css'
import Card from './card.jsx'

const FeaturedArtworks = ({darkMode}) => { 
    const image1 = "https://firebasestorage.googleapis.com/v0/b/kryptonig.appspot.com/o/Screenshot%20(243)%202.png?alt=media&token=8e3cb68e-f71d-458b-99f9-3d620d1110c0"
    const image2 = "https://firebasestorage.googleapis.com/v0/b/kryptonig.appspot.com/o/Screenshot%20(246)%202.png?alt=media&token=09e95a11-9030-430c-989e-c2522dc50c8c"
  return (
    <div>
        <h3 className={darkMode ? 'featured-artworks-dark': 'featured-artworks'}>Featured Artworks</h3>
        <p className={darkMode ? "explore-artwork-dark" : "explore-artwork" }>Explore new exciting artworks from creators all over the world</p>
        <div className="card-flex">
            <Card darkMode = {darkMode} images={image1}/>
            <Card darkMode={darkMode} images={image2} />
        </div>

        <div className={darkMode ? "faq-dark" : "faq"}>
          <h4>Frequently Asked Questions</h4>
          <p className={darkMode ? "wanna-dark" : "wanna"}>Wanna ask something?</p>
          <div className="faq-container">
            <div className={darkMode ? 'item-dark' : 'item'}>
              <p>How to use Kryptonig ?</p>
              <p>How our product works, how to integrate them and other questions for creators ?</p>
            </div>
            <div className={darkMode ? 'item-dark' : 'item'}>
              <p>What are NFTs exactly?</p>
              <p>How can I use Kryptonig to participate without bothering with crypto ?</p>
            </div>
          </div>
        </div>

        <div className="bottom-line">
          <p>Get ready to collect our NFT to create more projects that excites investors</p>
          <h5 className="get-started">Get Started</h5>
          <div className="padding"></div>
        </div>
        <div className="space"></div>
    </div>
  )
}

export default FeaturedArtworks