import React, { useEffect, useState } from 'react';
import BlogDetails from '../BlogDetails'
import PostText from '../Post-text';
import Comment from '../Comment';
import More from '../more';
import Logo from '../Logo';
import Footer from '../Footer';
import Navbar from '../Navbar';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { format } from 'date-fns';

const Featured = ()=>{

    const [websiteBlog, setWebsiteBlog] = useState({})

    const {id} = useParams();
    useEffect(()=>{

        const docRef = doc(db, 'websiteBlog', id)
        getDoc(docRef)
        .then((doc)=>{
            setWebsiteBlog({...doc.data(), id: doc.id})
        })
    }, [])
    const {date} = websiteBlog


    return(
        <div> 
           <Navbar/>
           <BlogDetails/>
           <PostText/>
           <Comment/>
           <More/>
           {/* <Logo/> */}
           <Footer/>
        </div>
    )
}
export default Featured