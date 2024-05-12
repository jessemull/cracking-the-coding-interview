import React from 'react'
import CreateComment from './CreateComment'
import Comments from './Comments'

const Posts = ({ posts = [] }) => {
  return (
    <div className='d-flex flex-row flex-wrap justify-content-between'>
      {posts.map((post) => {
        return (
          <div className="mb-4" key={post.id}>
            <div className='card p-3'>
              <h3>{post.title}</h3>
              <Comments comments={post.comments} />
              <CreateComment postId={post.id} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Posts