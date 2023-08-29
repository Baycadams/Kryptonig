import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import './dasboard.css'
import { auth } from '../../../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import Login from './login'
import Form from './form'

 

const AddBlog = ({title, editing, setEditing, editID, setEditID, content, setContent, setTitle, body, setBody, author, setAuthor, image, setImage, link, setLink, date, setDate, tag1, setTag1, tag2, setTag2}) => {
    const [loggedIn, setLoggedIn] = useState(false)
    useEffect(()=>{
        onAuthStateChanged(auth, (user)=> {
            if(user){
                setLoggedIn(true)
            }
            else{
                setLoggedIn(false)
            }
        })
    }, [])

    
    const logout = () => {
        signOut(auth)
    }
  return (
    <div className='dashboard'>
        {loggedIn ?
            <Layout>
                <div className="padd">
                <h2>Add Blog</h2>
                <Form title={title} content={content} editing={editing} editID={editID} setEditID={setEditID} setEditing={setEditing} setContent={setContent} setTitle={setTitle} body={body} setBody={setBody} author={author} setAuthor={setAuthor} image={image} setImage={setImage} link={link} setLink={setLink} date={date} setDate={setDate} tag1={tag1} setTag1={setTag1} tag2={tag2} setTag2={setTag2}  />
                
                
                </div>
            
            </Layout>
        : 
            <Login />
        }
            <button className='btn1' style={{backgroundColor: 'red'}} onClick={logout}>Log Out</button>
    
    </div>
  )
}

export default AddBlog