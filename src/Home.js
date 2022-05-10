import React from 'react'
import Feed from './Feed'

const Home = ({posts, search}) => {

 // const postList = posts.map(post =>)


  return (
    <main className='home'>
        <div>
          {posts.length ? 
          (<Feed posts={posts} search={search} />) : 
          (<h4 style={{margin:'15px', color:'red'}}> No blogs avilable at the moment</h4>)}

         
          
        </div>
    </main>
  )
}

export default Home