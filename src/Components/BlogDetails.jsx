import React, { useEffect, useState } from 'react';
import './feature.css'
import { useParams } from 'react-router-dom';
import { collection, doc, getDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

const BlogDetails = ()=>{


    const [websiteBlog, setWebsiteBlog] = useState({})

    const {id} = useParams();
    useEffect(()=>{
        
        // onSnapshot(collection(db, 'websiteBlog/',), (snapshot) => {
        //     setWebsiteBlog(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
        // })
       
        const docRef = doc(db, 'websiteBlog', id)
        getDoc(docRef)
        .then((doc)=>{
            setWebsiteBlog({...doc.data(), id: doc.id})
        })
    }, [])

    return(
        <div className="details-all">

            <div className='details'>

            <div className="publisher-detail">
               <div className="f">
                 <span>{websiteBlog.author}</span> 
                 <span>{websiteBlog.date}</span>
                </div> 
                <div className="ff">
                    featured
                </div>
            </div>
            <div className="creator">
                <h3>{websiteBlog.title}</h3>
            </div>
       
            <div className="fo">
            <div className="ff">
                    {websiteBlog.tag1}
                </div>
                <div className="ff">
                {websiteBlog.tag2}
                </div>
            </div>
        </div>

           
        </div>
    )
}

export default BlogDetails