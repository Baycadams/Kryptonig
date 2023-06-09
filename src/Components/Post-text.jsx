import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { Parser } from 'html-to-react';
import HTMLReactParser from 'html-react-parser';
import BlogText from './BlogComponents/blogText';


const PostText = ()=>{

    const [websiteBlog, setWebsiteBlog] = useState({})
    const htmlParser = new Parser()

    const {id} = useParams();
    useEffect(()=>{
        
       
        const docRef = doc(db, 'websiteBlog', id)
        getDoc(docRef)
        .then((doc)=>{
            setWebsiteBlog({...doc.data(), id: doc.id})
        })
       
    }, [])


    return(
        <div className="post-all text1">
            {/* <p style={{fontSize: '22px'}} dangerouslySetInnerHTML={{__html:websiteBlog.body}}/> */}
            {htmlParser.parse(websiteBlog.body)}
            
            
        
        </div>
    )
}

export default PostText