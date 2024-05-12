import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CreatePost from './CreatePost'
import Posts from './Posts'

const App = () => {
  const [posts, setPosts] = useState([])

  const fetchPosts = async () => {
    const res = await axios.get('http://localhost:4002/posts')
    setPosts(Object.values(res.data))
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div className='container'>
      <h1>Create Post</h1>
      <CreatePost />
      <hr />
      <h1>Posts</h1>
      <Posts posts={posts} />
    </div>
  )
}

export default App