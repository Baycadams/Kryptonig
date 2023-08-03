import React from 'react';


import './Blog.css'
import HTMLReactParser from 'html-react-parser';

const BlogText = ({content}) => {
  return (
      <div>
        
        <div className="content">
          {content}
        </div>
      
     </div> 
  );
}

export default BlogText;