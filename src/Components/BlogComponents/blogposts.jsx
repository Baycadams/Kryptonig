import React, { useEffect, useState } from 'react';
import BlogPost from './blogprop';
import HTMLReactParser from 'html-react-parser';
import {NavLink} from 'react-router-dom';
import { format } from 'date-fns';

import './Blog.css'
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';

const Blogs = () => {

  const  [websiteBlog, setWebsiteBlog] = useState([])

  useEffect(()=>{
    
    onSnapshot(collection(db, 'websiteBlog'), (snapshot) => {
        setWebsiteBlog(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
    })


}, [])
 

  return (
    <div >

      {websiteBlog.map((blog) => {
        const {id, author, body, date, imageURL, tag1, tag2, title} = blog
        const blogg = HTMLReactParser(body.substring(0, 360))
        return <div className='Appblog' key={id}>
          <NavLink exact to={`/blog/${id}`} id={id} >
          <BlogPost 
            blogImg ={imageURL}
            tittle={title}
            content={blogg}
            date={format(new Date(date), 'do MMMM Y')}
            publish={author}
            crypto={tag1}
            tech={tag2}
          />
          </NavLink>

        </div>
      })}
   </div>
  );
}

export default Blogs;
