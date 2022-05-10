import React from 'react'
import Feed from './Feed'

const Home = ({posts, search, isLoading}) => {

 // const postList = posts.map(post =>)


  return (
    <main className='home'>
        <div>
          {isLoading && <h4 style={{margin:'15px', margin:'25px',color:'lightgrey'}}> Loading Content</h4>}
          {posts.length!==0 &&  !isLoading && <Feed posts={posts} search={search} />}
          {posts.length===0 && isLoading==-1 && (<h4 style={{margin:'15px', color:'red'}}> No blogs avilable at the moment</h4>)}
        </div>
    </main>
  )
}

export default Home