import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, doc, getDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import './post-text.css'
import { Link } from 'react-router-dom';




const PostText2 = ({darkMode})=>{

    const [websiteBlog, setWebsiteBlog] = useState({})
    const [filtered, setFiltered] = useState([])
    const {currentID} = useParams();
    useEffect(()=>{

        onSnapshot(collection(db, 'websiteBlog'), (snapshot) => {
            setFiltered(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
        })

        const docRef = doc(db, 'websiteBlog', currentID)
        getDoc(docRef)
        .then((doc)=>{
            setWebsiteBlog({...doc.data(), id: doc.id})
        })
       
    }, [])




    return(
        <div>
            <p className={darkMode ? 'blog-post-text-dark' : 'blog-post-text'}  dangerouslySetInnerHTML={{__html:websiteBlog.body}}/>
            <div className='related-article'>
                <p className='related'>Related Article</p>
                {filtered.map((item)=> {
                    let display= 'display-on'
                    if(currentID === item.id) {
                        display = 'display-off'
                    }
                    return <Link to={`/blog/${currentID}`} className={display} key={item.id}>
                        <div className="display-flex">
                            <img src={item.imageURL} alt="" />
                            <h5>{item.title}</h5>
                        </div>
                    </Link>
                })}
            </div>
        </div>
    )
}

export default PostText2