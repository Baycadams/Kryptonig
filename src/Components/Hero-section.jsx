import React from 'react';
import {Link} from 'react-router-dom'
import './Home.css'
import { HashLink } from 'react-router-hash-link';
import Facts from './Facts';


const Hero = ({darkMode})=>{
    const note = [
        { 
            title: '$104B+', 
            body: 'Market Size'
        },
        {
            title: '50M+',
            body: 'People'
        },
        {
            title: '450K+',
            body: 'Creators'
        }
    ]

    return(
        <div>
            <div className={darkMode ? "Hero-section-dark" : "Hero-section"}> 
                <section className="header-container">
                    <div className='left-wing'>
                        <h3 className={darkMode? "unlocking-dark" : "unlocking"}>Unlock The Creator Economy</h3>
                        <p className={darkMode ? "para-dark" : "para"}>
                        With our all new contribute-to-earn model, Find and fund live projects showcased by millions of creators globally
                        </p>
                        <div className="cont">
                            <div className="explore-now-container">
                                <HashLink to='#more' className='explore-now-btn'>
                                    <p>Explore Now</p> 
                                </HashLink>
                                <Link to='https://www.linkedin.com/company/kryptonig-llc/' className='explore-now-btn'>
                                    <p>Contact Us</p> 
                                </Link>
                            </div>
                            {/* <Link to="https://www.linkedin.com/company/kryptonig-llc/">
                                <button className={darkMode? ' non-btn-dark' : ' non-btn'}>Contact Us</button>
                            </Link> */}
                        </div>
 
                    </div>
                    <div class="group1">
                        <img className='hero-section-image' src="https://firebasestorage.googleapis.com/v0/b/kryptonig.appspot.com/o/Frame%2013124.png?alt=media&token=fff879ea-8b3a-45c1-aa38-23b5fc7dfc17" alt=""  />
                    </div> 
                </section>
                <div className={darkMode ? "foot-note-dark" : "foot-note"}>
                          {note.map((item) => {
                            return <div>
                                <h3>{item.title}</h3>
                                <p>{item.body}</p>
                            </div>
                          })}
                </div>
                <div className="blockchain-icon">
                    <div className='icon-flex'> 
                        <img className='img-icon' src="https://firebasestorage.googleapis.com/v0/b/kryptonig.appspot.com/o/websiteBlog%2Fpolygon_logo-removebg-preview.png?alt=media&token=5292cc89-e290-4663-a722-836e31a26099" alt="" />
                        <p>Polygon</p>
                    </div>
                    <div className='icon-flex'>
                        <img className='ethereum' src={darkMode ? "https://firebasestorage.googleapis.com/v0/b/kryptonig.appspot.com/o/websiteBlog%2FEthereum%20logo%20(1).svg?alt=media&token=ab99ac33-cd5f-4db1-a0d9-c955be395f14" : 'https://firebasestorage.googleapis.com/v0/b/kryptonig.appspot.com/o/websiteBlog%2FEthereum%20logo.svg?alt=media&token=291206be-4511-4be7-b318-bfdfc6533f39'}  alt="" />
                    </div>
                    <div className='icon-flex'>
                        <img className='tezos' src='https://firebasestorage.googleapis.com/v0/b/kryptonig.appspot.com/o/websiteBlog%2Ftezos-removebg-preview%201.png?alt=media&token=b4306cbd-c37a-412e-8dfb-d4b6cac2ec2b' alt="" />
                        <p>Tezos</p>
                    </div>
                </div>  
 
            </div>
            <Facts darkMode = {darkMode} />

            <div className={darkMode ? "offer-dark" : "offer"}>
                <h3>The Kryptonig Offer</h3>
                <div className="boxes">
                    <Link to='/' className={darkMode ? "box1-dark" : "box1"}>
                        <div >
                        <div class="box-img">
                        <svg xmlns="http://www.w3.org/2000/svg" width="85" height="85" viewBox="0 0 85 85" fill="none">
                        <rect width="85" height="85" rx="27.3704" fill="url(#paint0_linear_723_570)"/>
                        <path d="M46.858 46.5685C46.858 46.1423 47.0404 45.7335 47.365 45.4321C47.6895 45.1307 48.1298 44.9614 48.5888 44.9614H55.5119C55.9709 44.9614 56.4111 45.1307 56.7357 45.4321C57.0603 45.7335 57.2426 46.1423 57.2426 46.5685V52.9971C57.2426 53.4233 57.0603 53.8321 56.7357 54.1335C56.4111 54.4349 55.9709 54.6042 55.5119 54.6042H48.5888C48.1298 54.6042 47.6895 54.4349 47.365 54.1335C47.0404 53.8321 46.858 53.4233 46.858 52.9971V46.5685ZM50.3196 51.3899H53.7811V48.1756H50.3196V51.3899ZM30.2011 19.6006L21.5473 26.0292C20.9726 26.4535 20.8965 27.1864 20.8965 27.8292V33.7114C20.8965 35.521 21.5403 37.1892 22.6273 38.5328V62.6399C22.6273 63.0662 22.8096 63.475 23.1342 63.7763C23.4588 64.0777 23.899 64.2471 24.358 64.2471H62.4349C62.894 64.2471 63.3342 64.0777 63.6588 63.7763C63.9834 63.475 64.1657 63.0662 64.1657 62.6399V38.5328C65.2526 37.1892 65.8965 35.521 65.8965 33.7114V27.8164C65.8965 27.1735 65.8203 26.4535 65.2457 26.0292L56.5919 19.6006C56.2855 19.3724 55.9046 19.2477 55.5119 19.2471H31.2811C30.8883 19.2477 30.5075 19.3724 30.2011 19.6006ZM34.7426 28.8899V33.7114C34.7426 34.9901 34.1956 36.2164 33.2218 37.1206C32.2481 38.0248 30.9274 38.5328 29.5503 38.5328C28.1732 38.5328 26.8526 38.0248 25.8788 37.1206C24.9051 36.2164 24.358 34.9901 24.358 33.7114V28.8899H34.7426ZM48.5888 28.8899V33.7114C48.5888 34.9901 48.0417 36.2164 47.068 37.1206C46.0943 38.0248 44.7736 38.5328 43.3965 38.5328C42.0194 38.5328 40.6987 38.0248 39.725 37.1206C38.7512 36.2164 38.2042 34.9901 38.2042 33.7114V28.8899H48.5888ZM62.4349 28.8899V33.7114C62.4349 34.9901 61.8879 36.2164 60.9142 37.1206C59.9404 38.0248 58.6197 38.5328 57.2426 38.5328C55.8656 38.5328 54.5449 38.0248 53.5711 37.1206C52.5974 36.2164 52.0503 34.9901 52.0503 33.7114V28.8899H62.4349ZM36.5738 22.4614L35.2757 25.6756H27.5599L31.8869 22.4614H36.5773H36.5738ZM38.9726 25.6756L40.2707 22.4614H46.4773L47.6299 25.6756H38.9726ZM50.1257 22.4614H54.9026L59.2296 25.6756H51.2784L50.1257 22.4614ZM60.7042 41.0785V61.0328H43.3965V46.5685C43.3965 46.1423 43.2141 45.7335 42.8896 45.4321C42.565 45.1307 42.1247 44.9614 41.6657 44.9614H31.2811C30.8221 44.9614 30.3818 45.1307 30.0573 45.4321C29.7327 45.7335 29.5503 46.1423 29.5503 46.5685V61.0328H26.0888V41.0785C27.8751 41.8046 29.8735 41.9482 31.7588 41.486C33.6442 41.0238 35.3058 39.983 36.4734 38.5328C38.0519 40.4839 40.5649 41.7471 43.3965 41.7471C46.228 41.7471 48.7411 40.4839 50.3196 38.5328C51.4872 39.983 53.1487 41.0238 55.0341 41.486C56.9195 41.9482 58.9178 41.8046 60.7042 41.0785ZM39.9349 61.0328H33.0119V48.1756H39.9349V61.0328Z" fill="white"/>
                        <defs>
                            <linearGradient id="paint0_linear_723_570" x1="72.25" y1="-3.91379e-06" x2="14.875" y2="85" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#1F1F1F"/>
                            <stop offset="1" stop-color="#508FE0"/>
                            </linearGradient>
                        </defs>
                        </svg>
                        </div>
                        <p class={darkMode ? "show-dark" : "show"}>Showroom</p>
                        <p className={darkMode ? "desc-dark" : "desc"}>Showcase your projects to a large and secure community of investors and contributors</p>
                        </div>
                    </Link>

                    <Link to='/' className={darkMode ? "box1-dark box-padding" : "box1 box-padding"}>
                        <div >
                        <div class="box-img">
                        <svg xmlns="http://www.w3.org/2000/svg" width="85" height="85" viewBox="0 0 85 85" fill="none">
                        <rect width="85" height="85" rx="27.3704" fill="url(#paint0_linear_784_9441)"/>
                        <path d="M38.0742 22.1211C38.0742 23.6768 39.3311 24.9336 40.8867 24.9336C51.7588 24.9336 60.5742 33.749 60.5742 44.6211C60.5742 46.1768 61.8311 47.4336 63.3867 47.4336C64.9424 47.4336 66.1992 46.1768 66.1992 44.6211C66.1992 30.6377 54.8701 19.3086 40.8867 19.3086C39.3311 19.3086 38.0742 20.5654 38.0742 22.1211ZM38.0742 30.5586C38.0742 32.1143 39.3311 33.3711 40.8867 33.3711C47.1006 33.3711 52.1367 38.4072 52.1367 44.6211C52.1367 46.1768 53.3936 47.4336 54.9492 47.4336C56.5049 47.4336 57.7617 46.1768 57.7617 44.6211C57.7617 35.3047 50.2031 27.7461 40.8867 27.7461C39.3311 27.7461 38.0742 29.0029 38.0742 30.5586ZM29.6367 31.9648C29.6367 29.6357 27.7471 27.7461 25.418 27.7461C23.0889 27.7461 21.1992 29.6357 21.1992 31.9648V51.6523C21.1992 58.6396 26.8682 64.3086 33.8555 64.3086C40.8428 64.3086 46.5117 58.6396 46.5117 51.6523C46.5117 44.665 40.8428 38.9961 33.8555 38.9961H32.4492V47.4336H33.8555C36.1846 47.4336 38.0742 49.3232 38.0742 51.6523C38.0742 53.9814 36.1846 55.8711 33.8555 55.8711C31.5264 55.8711 29.6367 53.9814 29.6367 51.6523V31.9648Z" fill="white"/>
                        <defs>
                            <linearGradient id="paint0_linear_784_9441" x1="72.25" y1="-3.91379e-06" x2="14.875" y2="85" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#1F1F1F"/>
                            <stop offset="1" stop-color="#508FE0"/>
                            </linearGradient>
                        </defs>
                        </svg>
                        </div>
                        <p class={darkMode ? "show-dark" : "show"}>Blog</p>
                        <p className={darkMode ? "desc-dark" : "desc"}>Stay connected and Discover what's next in the industry.</p>
                        </div>
                    </Link>

                    <Link to='/' className={darkMode ? "box1-dark" : "box1"}>
                        <div >
                        <div class="box-img">
                        <svg xmlns="http://www.w3.org/2000/svg" width="85" height="85" viewBox="0 0 85 85" fill="none">
                        <rect width="85" height="85" rx="27.3704" fill="url(#paint0_linear_784_9447)"/>
                        <path d="M65.142 47.0287C65.5237 45.3211 65.7246 43.5934 65.7246 41.8657C65.7246 29.4807 55.7001 19.436 43.315 19.436C41.6476 19.436 39.9701 19.6369 38.363 19.9885C50.7581 24.7095 60.5114 34.6034 65.142 47.0287ZM25.6766 28.0242C27.0527 26.2664 28.6599 24.7396 30.478 23.474C45.5047 27.9238 57.2268 39.7563 61.5862 54.8133C60.3306 56.6313 58.7737 58.3892 57.046 59.7351C52.7168 44.5376 40.8541 32.4438 25.6766 28.0242ZM24.0896 53.407C22.5628 50.8858 21.5382 48.013 21.1264 45.0901C29.1018 49.3992 35.6911 56.1994 39.9701 64.205C36.9568 63.763 34.0539 62.6682 31.4724 61.061C27.9568 62.3769 24.3507 63.5019 20.7246 64.436C21.6588 60.7697 22.7737 56.9528 24.0896 53.407ZM21.1063 38.7921C21.3675 36.8334 21.8998 34.9048 22.6934 33.0867C36.5449 37.6871 47.4434 48.8166 51.9534 62.7284C50.1353 63.4918 48.2369 63.984 46.2681 64.2552C41.6175 52.7943 32.5271 43.4829 21.1063 38.7921Z" fill="white"/>
                        <defs>
                            <linearGradient id="paint0_linear_784_9447" x1="72.25" y1="-3.91379e-06" x2="14.875" y2="85" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#1F1F1F"/>
                            <stop offset="1" stop-color="#508FE0"/>
                            </linearGradient>
                        </defs>
                        </svg>
                        </div>
                        <p class={darkMode ? "show-dark" : "show"}>Forum</p>
                        <p className={darkMode ? "desc-dark" : "desc"}>Create a forum and build your own community or contribute to others.</p>
                        </div>
                    </Link>
                </div>
            </div>
            
        </div>
    )
}
export default Hero