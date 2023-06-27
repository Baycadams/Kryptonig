import React, { useState, useRef, useMemo } from 'react'
import JoditEditor from 'jodit-react'
import { db} from '../../../firebase'
import {collection, addDoc} from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL} from 'firebase/storage'
import { useNavigate } from 'react-router-dom'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'



const Form = ({title, content, editID, setEditID, setContent, editing, setEditing, setTitle, body, setBody, author, setAuthor, image, setImage, link, setLink, date, setDate, tag1, setTag1, tag2, setTag2}) => {
    const [downloadURL, setDownloadURL] = useState('');
    
    const handleImageUpload = async (e) => {
        const imageFile = e.target.files[0];
    
        try {
          const storage = getStorage();
          const storageRef = ref(storage, `websiteBlog/${imageFile.name}` );
    
          await uploadBytes(storageRef, imageFile);
    
          const url = await getDownloadURL(storageRef);
          setDownloadURL(url);
          console.log(downloadURL);
        } catch (error) {
          console.error('Error uploading image:', error);
        }
      };
    
    const editor = useRef(null)
    
    const navigate= useNavigate()

    const [isLoading, setIsLoading] = useState(false)
    



    
    const handleSubmit = (e) => {
       
        setIsLoading(true)
        e.preventDefault()
        
            
           addDoc(collection(db, "websiteBlog"), {
                title: title,
                author: author,
                body: content,
                imageURL: downloadURL,
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
                {/* <textarea
                style={{height: '250px', border: "2px solid blue"}}
                placeholder='blog body'
                type='text'
                required
                value={content}
                onChange = {(e) => setContent(e.target.value)}/> */}
                {/* <JoditEditor ref={editor} value={content} onChange={newContent =>setContent(newContent)}/> */}
                <ReactQuill theme='snow' value={content} onChange={setContent} />
                
                <label> Author:</label>
                <select
                required
                value={author}
                style={{border: "2px solid blue"}}
                onChange = {(e) => setAuthor(e.target.value)}>
                    <option>Adams Nwokedi</option>
                    <option>Sobechi Savictor Evans-Ibe</option>
                </select>
                <input className='hug' accept='image/*' type="file" onChange={handleImageUpload} style={{border: "2px solid blue"}} />

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