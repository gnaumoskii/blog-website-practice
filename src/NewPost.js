import React from 'react'

import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const NewPost = ({posts, setPosts, setNewPost, addPost}) => {
  const navigate = useNavigate();
  let post = {id:0, title:'', date: '',content: ''}
  const date = new Date();
  const dateString = ('0' + date.getDate()).slice(-2) + '.'
             + ('0' + (date.getMonth()+1)).slice(-2) + '.'
             + date.getFullYear();

  return (
    <main className='newPost bg-light'>
      <hr></hr>
      <h4>WRITE NEW BLOG</h4>
      <form className=' m-2' onSubmit={(e)=> e.preventDefault()}>
        <label htmlFor='title'>Post Title</label>
        <input 
        className='inputTitle' 
        type='text' 
        autoComplete='off' 
        placeholder='Title'
        onChange={(e)=>(post.title = e.target.value)}
        >
        </input>
      </form>
      <form className=' m-2' onSubmit={(e)=> e.preventDefault()}>
        <label htmlFor='content'>Post Content</label>
        <textarea
          cols='35'
          rows='5'
          className='inputContent' 
          type='text' 
          autoComplete='off' 
          placeholder='Write content'
          onChange={(e)=>(post.content = e.target.value)}
          >
          </textarea>
      </form>

      <button 
            type='button' 
            className='btn btn-warning' 
            onClick={()=> {
              post.id = posts.length ? posts[posts.length-1].id + 1 : 1;
              post.date = dateString;
              addPost(post);
              navigate('/');
            }}
            > Publish
          </button>
  
        
    </main>
  )
}

export default NewPost