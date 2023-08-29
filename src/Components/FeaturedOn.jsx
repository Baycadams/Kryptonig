import './Home.css'

import React from 'react'

const FeaturedOn = ({darkMode}) => {
  return (
    <div>
      <div className='featured-on'>
        <p className="featured-header">Featured On</p>
          <div className="featured-on-flex">
            <p className="body-text">Creative talents</p>
            <p className="body-text">Digital Magazines</p>
            <p className="body-text">NFT Project76</p>
            <p className="body-text">ZoomQuilt</p>
          </div>
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

      <div className={darkMode ? "outside-web3-dark" : "outside-web3"}>
        <h3>Building Outside Web3?</h3>
        <p>We accept creators building</p>
        <div className="creators">
          <div className="creators-build">
            <img src="https://firebasestorage.googleapis.com/v0/b/kryptonig.appspot.com/o/websiteBlog%2FE-commerce.png?alt=media&token=b249fb1f-6834-4e02-950d-fdf6ad860f91" alt="" />
            <p>e-commerce</p>
          </div>
          <div className="creators-build">
            <img src="https://firebasestorage.googleapis.com/v0/b/kryptonig.appspot.com/o/websiteBlog%2FBitcoin.png?alt=media&token=c3736851-a4c7-471c-b2a3-ec6b227e85c2" alt="" />
            <p>blockchain</p>
          </div>
          <div className="creators-build">
            <img src="https://firebasestorage.googleapis.com/v0/b/kryptonig.appspot.com/o/websiteBlog%2FTaxi%20Rank.png?alt=media&token=07736194-0e4b-4048-ad30-bdaa72f1410a" alt="" />
            <p>transportation</p>
          </div>
          <div className="creators-build">
            <img src="https://firebasestorage.googleapis.com/v0/b/kryptonig.appspot.com/o/websiteBlog%2FGarden.png?alt=media&token=b9157b54-2175-4f72-9e2b-d81e5bff0743" alt="" />
            <p>agriculture</p>
          </div>
          <div className="creators-build">
            <img src="https://firebasestorage.googleapis.com/v0/b/kryptonig.appspot.com/o/websiteBlog%2FFutures.png?alt=media&token=1428e7fd-14ed-49b5-9e3d-5a8726b8d570" alt="" />
            <p>finance</p>
          </div>
          <div className="creators-build">
            <img src="https://firebasestorage.googleapis.com/v0/b/kryptonig.appspot.com/o/websiteBlog%2FPhysics.png?alt=media&token=577c3512-4237-47bc-9538-45d7d3baf1c0" alt="" />
            <p>energy</p>
          </div>
          <div className="creators-build">
            <img src="https://firebasestorage.googleapis.com/v0/b/kryptonig.appspot.com/o/websiteBlog%2FSpace%20Shuttle.png?alt=media&token=ecfd9dea-a27d-4285-981f-5b53d1e16088" alt="" />
            <p>aerospace</p>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default FeaturedOn