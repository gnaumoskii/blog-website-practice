import React from 'react'
import { useParams , useNavigate, Link } from 'react-router-dom';


const PostPage = ({posts, deletePost}) => {
  const {id} = useParams();
  const post = posts.find(post => (post.id) == id)
  const navigate = useNavigate();

  return (
    <main className='postContainer container  mt-5 bg-light'>
        <div className='row'>
          <div className='col-9'>
          <h1 className='postTitle p-2'>  {post.title}</h1> 
          </div>
          <div className='col-3'>
          
          <button type='button' className='deletePost btn btn-danger float-end' onClick={()=>{deletePost(post.id); navigate('/')}}> Delete </button>
          <Link to={'/post/edit/'+post.id}>
          <button type='button' className='editPost btn btn-warning float-end'> Edit </button>
          </Link>
          </div>
        </div>
        

        
          <span className='postDate col-2-sm'>{post.date}</span>






      <hr></hr>
      <p className='postContent col-12-lg m-3 p-3'>{post.content}</p>
    
    </main>
  )
}

export default PostPage