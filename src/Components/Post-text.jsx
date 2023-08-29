import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, doc, getDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import './post-text.css'
import { Link } from 'react-router-dom';
import { format } from 'date-fns';




const PostText = ({darkMode})=>{ 

    const [websiteBlog, setWebsiteBlog] = useState({})
    const [filtered, setFiltered] = useState([])

    const { id} = useParams();
    useEffect(()=>{

        onSnapshot(collection(db, 'websiteBlog'), (snapshot) => {
            setFiltered(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
        })

        const docRef = doc(db, 'websiteBlog', id)
        getDoc(docRef)
        .then((doc)=>{
            setWebsiteBlog({...doc.data(), id: doc.id})
        })
       
    }, [])




    return(
        <div>
            <p className={darkMode ? 'blog-post-text-dark' : 'blog-post-text'}  dangerouslySetInnerHTML={{__html:websiteBlog.body}}/>
            <div className='related-article'>
                <p className={darkMode ? 'related-dark' : 'related'}>Related Article</p>
                {filtered.map((item)=> {
                    const {id: currentID} = item
                    let display= 'display-on'
                    if(id === currentID) { 
                        display = 'display-off'
                    }
                    return <Link to='#' className={display} key={currentID}>
                        <div className="display-flex">
                            <img src={item.imageURL} alt="" />
                            <div className="article-body">
                                <div className={darkMode ? "flex-body-dark" : "flex-body"}>
                                    <p>{item.author}, {format(new Date(item.date), 'do LLL yyyy')}</p>
                                    <h5>5mins read</h5>
                                </div>
                                <p className={darkMode ? "article-title-dark" : "article-title"}>{item.title}</p>
                                <p className={darkMode ? 'inner-html-dark' : 'inner-html'} dangerouslySetInnerHTML={{__html: item.body.substring(0, 380) + '.....'}}></p>
                                <div className="article-tags">
                                <span>{item.tag1}</span>
                                <span>{item.tag2}</span>
                            </div>
                            </div>

                        </div>
                    </Link>
                })}
            </div>
        </div>
    )
}

export default PostText