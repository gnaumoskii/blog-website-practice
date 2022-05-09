import React from 'react'
import Feed from './Feed'

const Home = ({posts}) => {

 // const postList = posts.map(post =>)


  return (
    <main className='home'>
        <div>
          {posts.length ? 
          (<Feed posts={posts} />) : 
          (<p> No blogs avilable</p>)}

         
          
        </div>
    </main>
  )
}

export default Home