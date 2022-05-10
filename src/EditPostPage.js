import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const EditPostPage = ({posts,setPosts,editPost}) => {
    let message ="";
    const navigate = useNavigate();
    const {id} = useParams();
    let post = posts.find(post => (post.id) == id)
    const [title,setTitle] = useState(post.title);
    const [content,setContent] = useState(post.content);

  return (
    <main className='editPost bg-light'>
    <hr></hr>
    <h4>EDIT BLOG</h4>
    <form className=' m-2' onSubmit={(e)=> e.preventDefault()}>
        <label htmlFor='title'>Post Title</label>
        <input 
        className='inputTitle' 
        type='text' 
        autoComplete='off' 
        placeholder='Title'
        value={title}
        onChange={(e)=>(setTitle(e.target.value))}
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
          value={content}
          onChange={(e)=>(setContent(e.target.value))}
          
          >
          </textarea>
          </form>

    <button 
          type='button' 
          className='btn btn-warning'
          onClick={() => {
              post.content = content;
              post.title = title;
              editPost(post);
                navigate('/post/'+ id);
          }} 
          > Finish
        </button>

      
  </main>
  )
}

export default EditPostPage