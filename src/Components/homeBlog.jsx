import { collection, onSnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import { Link } from 'react-router-dom'
import ReactGA from 'react-ga4';



const HomeBlog = ({darkMode}) => {
   
    const handleGA = (title) => {
        ReactGA.event({
            category: 'homepage blog',
            value: title
        })
    }
    const [websiteBlog, setWebsiteBlog] = useState([])

    useEffect(()=>{
        
        onSnapshot(collection(db, 'websiteBlog'), (snapshot) => {
            setWebsiteBlog(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
        })


    }, [])


  return (
    <div>
        <h3 className={darkMode ? 'text00-dark' : 'text00'}>Our Blog</h3>
        <p className={darkMode ? 'paragraph00-dark' : 'paragraph00'}>Catch up on trending news from experts on blockchain and other exciting topics that empower your mind</p>
        <div className="container">
            {websiteBlog.map((blog)=> {
                const {id, imageURL, title} = blog
                return <section key={id} onClick={() => handleGA(title)} className="sect">
                    <Link to={`/blog/${title}/${id}`}>
                        <img src={imageURL} alt="" className="photograph" />
                        <div className="flexes">
                            <h3 className={darkMode ? 'title00-dark' : 'title00'}>{title}</h3>
                            <p className={darkMode ? 'read-dark' : 'read'}>5mins Read</p>
                        </div>
                        
                    </Link>
                        </section>

            })}
        </div>
        
    </div>
  )
}

export default HomeBlog