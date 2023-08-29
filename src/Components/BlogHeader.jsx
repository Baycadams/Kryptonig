import React from 'react'
import './BlogHeader.css'
import { useNavigate } from 'react-router-dom'

const BlogHeader = ({darkMode}) => {
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate('/create-blog-post')
  }
  return (
    <div className='blog-header-flex'>
        <div className={darkMode ? "blog-header-text-dark" : "blog-header-text"}>
            <h3>News and insights</h3>
            <p>Learn about cryptocurrency, NFTs, and blockchain, discover our latest product updates, partnership announcements, user stories, and more.</p>
            <div className="button-flex">
            <div className="test-run-new" onClick={handleNavigate}>Create blogpost</div>
            <div className="test-run-new2">Share your Podcast</div>
            </div>

        </div>
        <img src="https://firebasestorage.googleapis.com/v0/b/kryptonig.appspot.com/o/Group%2039%20(1).png?alt=media&token=24165228-d50b-4de5-8469-d3966c09050b" alt="" className="blog-header-image" />

    </div>

  )
}

export default BlogHeader