import './App.css'
import Layout from './Layout';

import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import EditPostPage from './EditPostPage';
import Missing from './Missing';

import {Route, Routes,Outlet, useNavigate, useParams} from 'react-router-dom';
import { useState, useEffect } from 'react'

function App() {
  //States and variables
  const API_URL = 'http://localhost:3500/posts';

  const [posts,setPosts] = useState([]);
  const [newPost,setNewPost] = useState({})
  const [search,setSearch] = useState('');

  

  useEffect( ()=> {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
    
  },[])

const handleSearch = (search) => {
  const postSearchList = posts.filter(post => post.title.includes(search));
  setPosts(postSearchList);
}

  const addPost = (post) => {
    const postList = [...posts,post];
    setPosts(postList);
    fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    })
  };

  const deletePost = (id) => {
    const postList = posts.filter((post) => post.id !== id);
    setPosts(postList);

    const reqUrl = API_URL + "/" + id;
    fetch(reqUrl,{
      method: 'DELETE'
    })
  };

  const editPost = (post) => {
    const newPostList = posts.map((p) => (p.id == post.id ? post : p));
    setPosts(newPostList);
    fetch(API_URL + "/" + post.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    })

  };


  return (
        <Routes>
          <Route path="/" element={<Layout search={search} setSearch={setSearch} handleSearch={handleSearch} />}>
            <Route index element={<Home posts={posts} search={search} />} />
            <Route path="post">
              <Route index element={<NewPost posts={posts} setPosts={setPosts} setNewPost={setNewPost} addPost={addPost} />} />
              <Route path="/post/:id" element={<PostPage posts={posts} deletePost={deletePost} />}/> 
              <Route path="/post/edit/:id/" element={<EditPostPage posts={posts} setPosts={setPosts} editPost={editPost} />}/>
            </Route>
            <Route path="about" element={<About />} />
            <Route path="*" element={<Missing />} />
          </Route> 
        </Routes>
  );
}

export default App;
