import React from 'react'
import './ShowroomHead.css'

const ShowroomHead = ({darkMode}) => {

    const note = [
        {
            title: '10M+',
            body: 'Projects'
        },
        {
            title: '7M+', 
            body: 'Funded'
        },
        {
            title: '3M+',
            body: 'Creators'
        }
    ]

  return ( 
    <div className='showroom'>
        <div className="header-flex">
            <div className={darkMode ? 'flex-left-dark' : 'flex-left'}>
                <h5 className={darkMode ? 'showcase-dark' : 'showcase'}>Showcase Your Genius To The World</h5>
                <p>Showcase your genius and express your values to a large and secure community of investors and contributors</p>
                <h4>Join Showroom</h4>

            </div>
            <img src='https://firebasestorage.googleapis.com/v0/b/kryptonig.appspot.com/o/Group%2010017.png?alt=media&token=e7371bc8-8131-40fb-bda5-5252c973f79c' alt="" />
        </div>
        <div className={darkMode ? "foot-note-showroom-dark" : "foot-note-showroom"}>
                          {note.map((item) => {
                            return <div>
                                <h2>{item.title}</h2>
                                <h3>{item.body}</h3>
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
  )
}

export default ShowroomHead