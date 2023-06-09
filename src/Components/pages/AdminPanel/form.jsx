import React, { useState, useRef, useMemo } from 'react'
import JoditEditor from 'jodit-react'
import { db} from '../../../firebase'
import {collection, addDoc, doc, updateDoc} from 'firebase/firestore'
import { storage } from '../../../firebase'
import { ref,uploadBytes,listAll, getDownloadURL} from 'firebase/storage'
import { useNavigate } from 'react-router-dom'
import HTMLReactParser from 'html-react-parser'


const Form = ({title, content, editID, setEditID, setContent, editing, setEditing, setTitle, body, setBody, author, setAuthor, image, setImage, link, setLink, date, setDate, tag1, setTag1, tag2, setTag2}) => {
    const editor = useRef(null)
    

    const navigate= useNavigate()

    
    const [isLoading, setIsLoading] = useState(false)
    
    // const handleUpload =()=> {
    //     if(image == null) return;
        
    //     const imageListRef = ref(storage, 'websiteImages/')
    //     const imageRef = ref(storage, `websiteImages/${image.name}`)
    //     uploadBytes(imageRef, image)
    //     .then(()=>{
    //         alert('image uploaded')
    //     })
    //     .then((
    //         listAll(imageListRef).then((response) => {
    //             response.items.forEach((item)=>{
    //                 getDownloadURL(item).then((url)=> {
    //                     setImageURL((prev)=> [...prev, url])
                        
    //                 })
    //             })
    //         })
    //     ))
        
    // }

    const handleEdit= () => {
        const editedPost = {
            title: title,
            author: author,
            body: content,
            photo: image,
            link: link,
            date: date,
            tag1: tag1,
            tag2: tag2
        }
        const docRef = doc(db, "websiteBlog", editID)
        updateDoc(docRef, editedPost)
        .then(docRef => {
            alert('blog post edited')
        })
        .catch(error => {alert(error.message)})

            // setTitle('')
            // setBody('')
            // setLink('')
            // setDate('')
            // setTag1('')
            // setTag2('')
            // setEditID('')
            // navigate('/adminpanel/home')

    }
    
    const handleSubmit = (e) => {
       
        setIsLoading(true)
        e.preventDefault()
        
            
           addDoc(collection(db, "websiteBlog"), {
                title: title,
                author: author,
                body: content,
                photo: image,
                link: link,
                date: date,
                tag1: tag1,
                tag2: tag2,
        
              })
              
            setTitle('')
            setBody('')
            setLink('')
            setDate('')
            setTag1('')
            setTag2('')
            setContent('')
            navigate('/adminpanel/home')

        
        }


  return (
    <div>
        <div className="create">
            <h2>Add a new blog post</h2>
            
            <form >
                <label htmlFor='title'>Title</label>
                <textarea
                style={{height: '50px', border: "2px solid blue"}}
                placeholder='blog title'
                type='text'
                required
                value={title}
                onChange = {(e) => setTitle(e.target.value)}/>
                
                
                
                <label> Blog body:</label>
                <JoditEditor ref={editor} value={content} onChange={newContent =>setContent(newContent)}/>
                
                <label> Author:</label>
                <select
                required
                value={author}
                style={{border: "2px solid blue"}}
                onChange = {(e) => setAuthor(e.target.value)}>
                    <option>Adams Nwokedi</option>
                    <option>Sobechi Savictor Evans-Ibe</option>
                </select>
                <input className='hug' name='file' type="file" onChange={(e) => setImage(e.target.files[0])} style={{border: "2px solid blue"}} />

                <label >Image Link:</label>
                <textarea
                style={{height: '50px', border: "2px solid blue"}}
                placeholder='image link'
                type='text'
                required
                value={link}
                onChange = {(e) => setLink(e.target.value)}/>
                <label htmlFor="start">Date</label>
                <input
                style={{height: '50px', border: "2px solid blue"}}
                required
                type='date'
                onChange = {e => setDate(e.target.value)}/>
                <label htmlFor="tag1">Tags</label>
                <textarea
                style={{height: '50px', border: "2px solid blue"}}
                placeholder='Tag'
                type='text'
                required
                value={tag1}
                onChange = {(e) => setTag1(e.target.value)}/>
                <textarea
                style={{height: '50px', border: "2px solid blue"}}
                placeholder='tag'
                type='text'
                required
                value={tag2}
                onChange = {(e) => setTag2(e.target.value)}/>
               
                {!isLoading && !editing && <div className="btn"><button className='btn2' onClick={handleSubmit}>Add Blog</button></div>}
                {isLoading && <div className="btn"><button className='btn2' disabled>Adding Blog</button></div>}
                {editing && <div className="btn"><button className='btn2' onClick={handleEdit} >Edit Blog</button></div>}
            </form>
            
        </div> 
            
        
    </div>
  )
}

export default Form