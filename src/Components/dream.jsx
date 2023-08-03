import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import './About.css'

const Dream = ({darkMode})=>{
    const team = [
        {
            id: 1,
            image: '/images/CAM_8511.jpg',
            name: 'Nwokedi Adams',
            position: 'Enterprise Developer',
            twitter: 'https://www.twitter.com/kryptonigllc',
            linkedin: 'https://www.linkedin.com/kryptonigllc'
        },
        {
            id: 2,
            image: 'https://firebasestorage.googleapis.com/v0/b/kryptonig.appspot.com/o/IMG_4175_-_Nwokedi_chibuike-removebg-preview.png?alt=media&token=a859ea0c-65ec-42da-87ea-03978e91844c',
            name: 'Nwokedi Daniel',
            position: 'Chief Technology Officer',
            twitter: 'https://www.twitter.com/kryptonigllc',
            linkedin: 'https://www.linkedin.com/kryptonigllc'
        },
        {
            id: 3,
            image: '/images/kryptonig-seun.jpg',
            name: 'Ilesanmi Oluwaseun',
            position: 'Product Designer',
            twitter: 'https://www.twitter.com/kryptonigllc',
            linkedin: 'https://www.linkedin.com/kryptonigllc'
        },
        {
            id: 4,
            image: '/images/kryptonig-hilda.jpg',
            name: 'Hilda Olisakwe',
            position: 'Product Design Intern',
            twitter: 'https://www.twitter.com/kryptonigllc',
            linkedin: 'https://www.linkedin.com/kryptonigllc'
        },
        {
            id: 5,
            image: '/images/kryptonig-ibraheem.jpg',

            name: 'Ibraheem Adejumo',
            position: 'Front-End Developer',
            twitter: 'https://www.twitter.com/kryptonigllc',
            linkedin: 'https://www.linkedin.com/kryptonigllc'
        },
        {
            id: 6,
            image: 'https://firebasestorage.googleapis.com/v0/b/kryptonig.appspot.com/o/kryptonig1.jpg?alt=media&token=c91ff183-2569-4803-835f-401e8e6adb04',
            name: 'Chidinma Arua',
            position: 'Social Media Manager',
            twitter: 'https://www.twitter.com/kryptonigllc',
            linkedin: 'https://www.linkedin.com/kryptonigllc'
        },
        {
            id: 7,
            image: 'https://firebasestorage.googleapis.com/v0/b/kryptonig.appspot.com/o/kryptonig-Evans.jpg?alt=media&token=bb20b63c-9c72-4b76-837e-251f2f28750e',
            name: 'Evans-Ibe Savictor',
            position: 'Technical Writer',
            twitter: 'https://www.twitter.com/kryptonigllc',
            linkedin: 'https://www.linkedin.com/kryptonigllc'
        },
        {
            id: 6,
            image: 'https://firebasestorage.googleapis.com/v0/b/kryptonig.appspot.com/o/WhatsApp%20Image%202023-06-24%20at%2010.06%201.png?alt=media&token=664a36af-500a-4d1e-97b9-7afc2a08c922',
            name: 'Alfred Onisoya',
            position: 'BE Development Intern',
            twitter: 'https://www.twitter.com/kryptonigllc',
            linkedin: 'https://www.linkedin.com/kryptonigllc'
        }
    ]

    return(
        <div className='team-page'>
            <h3 className={darkMode ? 'about-us-header-text-dark' : 'about-us-header-text'}>OUR MISSION</h3>
            <p className={darkMode ? "support-system-dark" : "support-system"}>Building a support system in the blockchain industry</p>
            <div class="text1">
                <div className="text-img">
                    <img src="/images/CAM_8511.jpg" alt=""  />
                </div>
                <div class={darkMode ? "text-p-dark" : "text-p"}>
                    <p>
                    Our mission is to build an ecosystem in the blockchain industry that enhances an efficient community based investment for creators, stimulate innovations and knowledge sharing, hence, providing highly secured and seamless return on investment to investors and creators.
                    </p>
               </div>
           </div>

           <div class="text2">
            <h5 className={darkMode ? "about-us-header-text-dark" : "about-us-header-text"}>THE TEAM</h5>
            <p className={darkMode ? "support-system-dark" : "support-system"}>An innovative team</p>
            <p className={darkMode ? "team-description-dark" : "team-description"}>Team-Kryptonig is a team of innovative, enthusiastic and like-minded individuals with the drive to proffer/ provide solutions in the Blockchain Industry and bring the future of decentralized autonomous organization to the present, and open the doors of possibilities in.</p>
          </div>

            <div className="team">
                {team.map((item)=> {
                    const {id, image, name, position, twitter, linkedin} = item
                    return <div key={id}>
                        <img className='team-image' src={image} alt="" srcset="" />
                        <h3 className={darkMode ? 'team-name-dark' : 'team-name'}>{name}</h3>
                        <h4 className={darkMode ? 'team-position-dark' : 'team-position'}>{position}</h4>
                        <div className="icon-container">
                        <FaTwitter  className={darkMode ? 'team-icons-dark' : 'team-icons'}/>
                        <FaLinkedin className={darkMode ? 'team-icons-dark' : 'team-icons'}/>
                        </div>
                        
                    </div>
                })}
            </div>

        </div>
    )
}

export default Dream