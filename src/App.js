import './App.css'
import Layout from './Layout';

import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';

import Missing from './Missing';

import {Route, Routes,Outlet, useNavigate, useParams} from 'react-router-dom';
import { useState, useEffect } from 'react'

function App() {
  //States and variables


  const [posts,setPosts] = useState([]);
  const [search,setSearch] = useState('');

  const postsExample = [
  
  ];
  


  useEffect(()=> {
    setPosts(postsExample);
  },[])



  return (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home posts={posts} />} />
            <Route path="post">
              <Route index element={<NewPost posts={posts} setPosts={setPosts} />} />
              <Route path="/post/:id" element={<PostPage posts={posts} />} />
            </Route>
            <Route path="about" element={<About />} />
            <Route path="*" element={<Missing />} />
          </Route> 
        </Routes>
  );
}

export default App;
