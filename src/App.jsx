import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './Components/pages/Home';
import About from './Components/pages/About';
import Service from './Components/pages/Service';
import Nfts from './Components/pages/Nfts';
import Invest from './Components/pages/Invest';
import Blog from './Components/pages/Blog';
import Wishlist from './Components/pages/wishlist';
import Featured from './Components/pages/Featured';
import Featured2 from './Components/pages/Featured2';
import Featured3 from './Components/pages/Featured3';
import Admin from './Components/pages/AdminPanel/admin';
import AdminHome from './Components/pages/AdminPanel/AdminHome';
import AddBlog from './Components/pages/AdminPanel/AddBlog';


function App() {
  const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('Adams Nwokedi')
    const [image, setImage] = useState('')
    const [link, setLink] = useState('')
    const [date, setDate] = useState('')
    const [tag1, setTag1] = useState('')
    const [tag2, setTag2] = useState('')
    const [content, setContent] = useState('')
    const [editing, setEditing] = useState(false)
    const [editID, setEditID] = useState('')

  return (
    <div className="App">
      <Router>
      
          <Routes>
          <Route exact path='/' Component={Home}></Route>
          <Route exact  path='/about' Component={About}></Route>
          <Route exact path='/adminpanel' Component={Admin}></Route>
          <Route exact  path='/service' Component={Service}></Route>
          <Route exact  path='/nfts' Component={Nfts}></Route>
          <Route exact  path='/invest' Component={Invest}></Route>
          <Route exact  path='/blog' Component={Blog}></Route>
          <Route exact  path='/wishlist' Component={Wishlist}></Route>
          <Route exact  path='/blog/:id' Component={Featured}></Route>
          <Route exact path='/home'  element={<AdminHome content={content } editID={editID} setEditID = { setEditID} setContent = {setContent} title={title} setTitle={setTitle} body={body} setBody={setBody} author={author} setAuthor={setAuthor} image={image} setImage={setImage} link={link} setLink={setLink} date={date} setDate={setDate} tag1={tag1} setTag1={setTag1} tag2={tag2} setTag2={setTag2} editing={editing} setEditing={setEditing}/>}></Route>
          <Route exact path='/addblog' element={<AddBlog content={content } editID={editID} setEditID = { setEditID} setContent = {setContent} title={title} setTitle={setTitle} body={body} setBody={setBody} author={author} setAuthor={setAuthor} image={image} setImage={setImage} link={link} setLink={setLink} date={date} setDate={setDate} tag1={tag1} setTag1={setTag1} tag2={tag2} setTag2={setTag2} editing={editing} setEditing={setEditing} />}></Route>

          </Routes>
      </Router>
      
    </div>
  )
}

export default App
