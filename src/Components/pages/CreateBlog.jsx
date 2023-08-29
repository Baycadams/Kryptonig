import React from 'react'
import './CreateBlog.css'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../firebase'

const CreateBlog = ({title, content, editID, setEditID, setContent, editing, setEditing, setTitle, body, setBody, author, setAuthor, image, setImage, link, setLink, date, setDate, tag1, setTag1, tag2, setTag2}) => {

    const [isLoading, setIsLoading] = useState(false)
    const [darkMode, setDarkMode] = useState(false)
    const [downloadURL, setDownloadURL] = useState('');

    const navigate= useNavigate()
    
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
                clap: 0
        
              })
              
            setTitle('')
            setBody('')
            setLink('')
            setDate('')
            setTag1('')
            setTag2('')
            setContent('')
            navigate('/blog')

        
        }


    let backgroundd = 'light'
    if (darkMode) {
         backgroundd = 'dark'
    } else {backgroundd = 'light'}


  return (
    <div className={backgroundd}>
        <div className="navbar-heading">
            <NavLink exact to='/' className='nav-logo'>
                <img src="https://firebasestorage.googleapis.com/v0/b/kryptonig.appspot.com/o/Blog%20Pictures%2FKRYPTONIG-ICON%201.png?alt=media&token=d2080398-1405-4320-91ea-a91971e920bb" alt="" />
                <p className={darkMode ? 'krypto-dark' : 'krypto-light'} >Krypto<span style={{color: '#F1765F'}}>nig</span></p>
            </NavLink>
            {!isLoading && !editing && <div onClick={handleSubmit}><button className='button-head' >Publish</button></div>}
            {isLoading && <div className="btn"><button className='btn2' disabled>Adding blog</button></div>}
            {editing && <div className="btn"><button className='btn2'>Edit Blog</button></div>}
        </div>

        <div className="create bottom-padding">
            
            <form style={{backgroundColor: 'white', width: '80%', margin: '0 auto'}}>
                <label htmlFor='title' style={{fontFamily: "Poppins", fontSize: "14px"}}>Title</label>
                <textarea
                style={{borderTop: '0px', borderLeft: '0px', borderRight: "0px",  borderBottom: "2px solid rgba(30, 30, 30, 0.19)", height: '40px', width: '60%'}}
                className='input-field-form'
                placeholder='blog title'
                type='text'
                required
                value={title}
                onChange = {(e) => setTitle(e.target.value)}/>

                <label style={{fontFamily: "Poppins", marginBottom: "15px", fontSize: "14px"}}> Blog body</label>
                <ReactQuill theme='snow' value={content} onChange={setContent} className='editor-text' />

                <label style={{marginTop: '90px', fontSize: "14px"}}> Author:</label>
                <input
                required
                value={author}
                className='input-field-form'
                maxLength='10'
                style={{borderTop: '0px', borderLeft: '0px', borderRight: "0px",  borderBottom: "2px solid rgba(30, 30, 30, 0.19)", height: '40px', width: '60%'}}
                onChange = {(e) => setAuthor(e.target.value)}/>

                <input className='input-field-form' style={{borderTop: '0px', borderLeft: '0px', borderRight: "0px", marginTop: '50px', border: "2px solid rgba(30, 30, 30, 0.19)", height: '40px', width: '60%'}} accept='image/*' type="file" onChange={handleImageUpload} />

                <label htmlFor="start" style={{fontSize: "14px"}}>Date</label>
                <input
                className='input-field-form'
                required
                type='date'
                style={{borderTop: '0px', borderLeft: '0px', borderRight: "0px",  borderBottom: "2px solid rgba(30, 30, 30, 0.19)", height: '40px', width: '60%'}}
                onChange = {e => setDate(e.target.value)}/>

                <label htmlFor="tag1">Tags</label>
                <textarea
                className='input-field-form'
                placeholder='tag'
                type='text'
                required
                value={tag1}
                maxLength='10'
                style={{borderTop: '0px', borderLeft: '0px', borderRight: "0px",  borderBottom: "2px solid rgba(30, 30, 30, 0.19)", height: '40px', width: '60%', fontFamily: "Poppins"}}
                onChange = {(e) => setTag1(e.target.value)}/>

                <textarea
                className='input-field-form'
                placeholder='tag'
                type='text'
                required
                value={tag2}
                maxLength='10'
                style={{borderTop: '0px', borderLeft: '0px', borderRight: "0px",  borderBottom: "2px solid rgba(30, 30, 30, 0.19)", height: '40px', width: '60%'}}
                onChange = {(e) => setTag2(e.target.value)}/>


            </form>
        </div>
    </div>
  )
}

export default CreateBlog