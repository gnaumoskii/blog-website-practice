import Layout from './Layout';

import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';

import Missing from './Missing';

import {Route, Routes,Outlet, useNavigate} from 'react-router-dom';


function App() {
  return (
    
     
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="post">
              <Route index element={<NewPost />} />
              <Route path="/post/:id" element={<PostPage />} />
            </Route>
            <Route path="about" element={<About />} />
            <Route path="*" element={<Missing />} />
          </Route> 
        </Routes>
 
  
      
          // <Header />
          //  <Nav />
        
          // <NewPost />
          // <PostPage />
          // <About />
          // <Footer />
          // <Missing />

     

  );
}

export default App;
