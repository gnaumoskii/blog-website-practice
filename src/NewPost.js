import React from 'react'

import { useEffect } from 'react'

const NewPost = ({posts, setPosts}) => {
  let post = {title:'', date: '',content: ''}
  let postList = posts;
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
              post.date = dateString;
              postList.push(post);
              setPosts(postList);
            }}
            > Publish
          </button>
  
        
    </main>
  )
}

export default NewPost