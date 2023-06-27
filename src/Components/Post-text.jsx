import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';



const PostText = ()=>{

    const [websiteBlog, setWebsiteBlog] = useState({})

    const {id} = useParams();
    useEffect(()=>{
        
       
        const docRef = doc(db, 'websiteBlog', id)
        getDoc(docRef)
        .then((doc)=>{
            setWebsiteBlog({...doc.data(), id: doc.id})
        })
       
    }, [])


    return(
        <div className="">
            <p className='blogg' style={{fontSize: '22px', marginLeft: '20px', marginRight: '20px'}} dangerouslySetInnerHTML={{__html:websiteBlog.body}}/>
            
        </div>
    )
}

export default PostText