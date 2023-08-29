import React, { useEffect, useState } from 'react';
import BlogPost from './blogprop';
import HTMLReactParser from 'html-react-parser';
import {NavLink} from 'react-router-dom';
import { format } from 'date-fns';
import tags from '../tags'
import './Blog.css'
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';

const Blogs = ({darkMode}) => {
  const [tag, setTag] = useState(tags)
  const [tagIndex, setTagIndex] = useState(0)
  const [filter, setFilter] = useState('View all')
  const [websiteBlog, setWebsiteBlog] = useState([])

  const handleFilter = (index,title) => {
    setTagIndex(index)
    setFilter(title)
  }


  useEffect(()=>{
    
    onSnapshot(collection(db, 'websiteBlog'), (snapshot) => {
      setWebsiteBlog(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
        
    })

  
}, [])
 

  return (
    <div className='blog-body-flex'>

          <div  className='tagss'> 
            {tag.map((item, index) => {
              const {id, title} = item
              return <div key={id}>
                <p onClick={()=> handleFilter(index,title)} className={`grey ${tagIndex === index  && 'pink'}`}>{title}</p>
              </div>
            })}
          </div>
      <div className="blog-flex-container">
      {websiteBlog.map((blog) => {
        const {id, author, body, date, imageURL, tag1, tag2, title} = blog
        const blogg = HTMLReactParser(body.substring(0, 160)  + '.....')

        let display = 'display-none'
        if(filter=== tag1 || filter === tag2) {
          display = 'display-block'
        }
        else if (filter === 'View all') {
          display = 'display-block'
        }
        else {display= 'display-none'}


        return <div className={`${display} `} key={id}>
          <div className={darkMode ? 'Appblog-dark' : 'Appblog'}>
          
          <BlogPost 
            blogImg ={imageURL}
            tittle={title}
            content={blogg}
            date={format(new Date(date), 'do MMMM Y')}
            publish={author}
            crypto={tag1}
            tech={tag2}
            darkMode={darkMode}
            id={id}
          />

          </div>
         

        </div>
      })}
      </div>
      
      
   </div>
  );
}

export default Blogs;
