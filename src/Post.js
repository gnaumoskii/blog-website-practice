import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({key, post}) => {
  return (
    <div className='post row m-5 p-0'>
        <Link to={'/post/'+post.id} className='postTitle col-6-md'>
            <h2>{post.title}</h2>
        </Link>
        <div className='postDate col-6-md'>
            <p>{post.date}</p>
            <hr className='p-0 m-0' style={{position:'relative', bottom:"12px", right:'15px'}}></hr>
            
        </div>
        
        <div className='postContent col-6-md'>
          
            <p>{post.content}</p>
        </div>
    </div>
  )
}

export default Post