import React from 'react'
import { useParams } from 'react-router-dom';

const PostPage = ({posts}) => {
  const {id} = useParams();
  const post = posts.find(post => (post.id) == id)

  return (
    <main className='postContainer container mt-5 bg-light'>
      <h1 className='postTitle col-12-lg p-2'>  {post.title}</h1>
      <span className='postDate'>{post.date}</span>
      <hr></hr>
      <p className='postContent col-12-lg m-3 p-3'>{post.content}</p>
    
    </main>
  )
}

export default PostPage