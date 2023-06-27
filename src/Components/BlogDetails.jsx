import React, { useEffect, useState } from 'react';
import './feature.css'
import { useParams } from 'react-router-dom';
import { collection, doc, getDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { format } from 'date-fns';

const BlogDetails = ()=>{


    const [websiteBlog, setWebsiteBlog] = useState({})

    const {id} = useParams();
    useEffect(()=>{

        const docRef = doc(db, 'websiteBlog', id)
        getDoc(docRef)
        .then((doc)=>{
            setWebsiteBlog({...doc.data(), id: doc.id})
        })
    }, [])
    const {imageURL,date, author, title, tag1, tag2} = websiteBlog

    return(
        <div>
            
            <div className="post-banner">
                <h2>BLOGPOSTS</h2>
                <p className='p'>Thoughts and advice on web3 and the creator economy</p>
                <img src={imageURL} alt="" srcset="" />
            </div>

            <div className="details-all">

                <div className='details'>

                <div className="publisher-detail">
                <div className="f">
                    <span>{author}</span> 
                    <span>{date}</span>
                    </div> 
                    <div className="ff">
                        featured
                    </div>
                </div>
                <div className="creator">
                    <h3>{title}</h3>
                </div>

                <div className="fo">
                <div className="ff">
                        {tag1}
                    </div>
                    <div className="ff">
                    {tag2}
                    </div>
                </div>
                </div>


            </div>
        </div>
       
    )
}

export default BlogDetails