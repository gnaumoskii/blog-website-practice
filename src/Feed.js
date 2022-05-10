import React from 'react'
import Post from './Post'

const Feed = ({posts,search}) => {
  return (
    <div>
        {posts.filter(post => post.title.toLowerCase().includes(search)).map(post => (
            <Post key={post.id} post={post}/>
        ))}
    </div>
  )
}

export default Feed