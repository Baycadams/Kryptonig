import { collection, onSnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import { Link } from 'react-router-dom'



const HomeBlog = () => {
   

    const [websiteBlog, setWebsiteBlog] = useState([])

    useEffect(()=>{
        
        onSnapshot(collection(db, 'websiteBlog'), (snapshot) => {
            setWebsiteBlog(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
        })


    }, [])


  return (
    <div>
        <h3 className='text00'>Kryptonig blog posts</h3>
        <div className="container">
            {websiteBlog.map((blog)=> {
                const {id, imageURL, title, tag1} = blog
                return <section key={id} className="sect">
                    <Link to={`/blog/${id}`}>
                        <img src={imageURL} alt="" className="photo" />
                        <div className="basic"><p>{tag1}</p></div>
                        <h3 className='title00'>{title}</h3>
                    </Link>
                        </section>

            })}
        </div>
        
    </div>
  )
}

export default HomeBlog