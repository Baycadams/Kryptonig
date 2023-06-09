import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import { auth } from '../../../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { db } from '../../../firebase'
import {collection, deleteDoc, doc, onSnapshot} from 'firebase/firestore'
import HTMLReactParser from 'html-react-parser'
import { useNavigate } from 'react-router-dom'
import Login from './login'


const AdminHome = ({editID, setEditID, title, setTitle, editing, setEditing, body, setBody, author, setAuthor, image, setImage, link, setLink, date, setDate, tag1, setTag1, tag2, setTag2, content, setContent}) => {
    const [websiteBlog, setWebsiteBlog] = useState([])
    
    const Navigate=useNavigate()
    const [username, setUsername] = useState('Admin')

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


    const handleDelete = (id) => {
        deleteDoc(doc(db, 'websiteBlog', id))
    }

    // const handleEdit = (id) => {
    //     const newWebsiteBlog= websiteBlog.find((item) => item.id === id)
    //     setEditID(newWebsiteBlog.id)
    //     setTitle(newWebsiteBlog.title)
    //     setBody(newWebsiteBlog.body)
    //     setAuthor(newWebsiteBlog.author)
    //     setImage(newWebsiteBlog.image)
    //     setLink(newWebsiteBlog.link)
    //     setDate(newWebsiteBlog.date)
    //     setTag1(newWebsiteBlog.tag1)
    //     setTag2(newWebsiteBlog.tag)
    //     setContent(newWebsiteBlog.content)
    //     setEditing(true)
    //     Navigate('/adminpanel/addblog')
    // }

    useEffect(()=>{
        setUsername(localStorage.getItem('username'))
        onSnapshot(collection(db, 'websiteBlog'), (snapshot) => {
            setWebsiteBlog(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
        })


    }, [])
    
    
    const logout = () => {
        signOut(auth)
    }


  return (
    <div >
        <Layout>
            {loggedIn ?
            
            <>
                <div className="create padd">
                <h2 className='dash'>Welcome to your dashboard, <span className='username'>{username}</span></h2>
                
                {websiteBlog.map((blog) => {
                    const {id, author, body, date, link, photo, tag1, tag2, title, post} = blog
                    return (
                        <div className="admin-home" key={id}>
                            <div className='flex'>
                                <h2>{title}</h2>
                               
                            
                                <div className="flex">
                                    <div className="padding"><button className='delete' onClick={()=>{handleDelete(id)}}>Delete</button></div>
                                    {/* <div className="padding"><button className='edit' onClick={()=>{handleEdit(id)}}>Edit</button></div>                             */}
                                </div>
                                
                            </div>
                        </div>
                    
                    )
                })}
                </div>
                <div style={{paddingTop:'100px', display: 'flex', justifyContent: 'center'}}>
                <button className='btn1' style={{backgroundColor: 'red'}} onClick={logout}>Log Out</button>
                </div>
            </>
            :

            <Login />

            }
       
        </Layout>
    </div>
  )
}

export default AdminHome