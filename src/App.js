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
    {
      id: 1,
      title: "First blog",
      date: "05.05.2022",
      content: "This is the first test blog post on this website"
    },
    {
      id: 2,
      title: "Blablabal",
      date: "06.05.2022",
      content: "testtttt"
    },
    {
      id: 3,
      title: "third blogggg",
      date: "06.05.2022",
      content: "3"
    },
    {
      id: 4,
      title: "4th",
      date: "08.05.2022",
      content: "444444444444."
    },
    {
      id: 5,
      title: "5th",
      date: "08.05.2022",
      content: "45554444444."
    }
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
