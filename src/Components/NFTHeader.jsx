import React from 'react'
import './NFTHeader.css'
import { Link } from 'react-router-dom'

const NFTHeader = ({darkMode}) => {
  return (
    <div >
      <div className="nft-header">
        <div className={darkMode ? "section1-dark" : "section1"}>
          <h3>
          The Easiest Way To Contribute And Earn True Rewards, Instantly! 
          </h3>
          <p>
          Web3 is all about creator support. Discover rewards that give you access to more opportunities in your preferred industr
          </p>
          <Link to="https://opensea.io/kryptonig"><h5>Explore Now</h5></Link>
          
        </div>
        <div className="image">
          <img src='https://firebasestorage.googleapis.com/v0/b/kryptonig.appspot.com/o/heroimage.png?alt=media&token=fd3fc9b5-bcf3-48a1-a776-8c636e50e812' alt="" />
        </div>
      </div>

      <div>
        <h3 className={darkMode ? "why-us-dark": "why-us"}>
        The Why? 
        </h3>
        <p className={darkMode? "kryptonig-text-dark" : "kryptonig-text"}>
        By returning value, we are bringing an end to the creator’s dilemma - One Person! One creator! One contributor! One Reward!
        </p>
      </div>
      <div className="get-popular-nft">
        <div className="img-contain">
          <img src="https://firebasestorage.googleapis.com/v0/b/kryptonig.appspot.com/o/julian-hochgesang-39BKKhuy11k-unsplash%201.png?alt=media&token=dd5f2d0a-7beb-4012-81d4-d07a0ae3b339" alt="" />
        
        </div>
        
        <div className={darkMode ? "get-popular-text-dark" : "get-popular-text"}> 
          <h3>Get Popular NFT</h3>
          <p>We are committed to help you begin your journey into creating that exciting project that captivates investors to help you change your world and research. Our platform projects NFT artworks that resonates with you.</p>
        </div>
      </div>
      
    </div>

  )
}

export default NFTHeader