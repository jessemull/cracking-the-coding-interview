import React from 'react'

const Comments = ({ comments }) => {
  return (
    <div className='mt-3'>
      <h3>Comments</h3>
      {comments.map(({ id, content }) => {
        return (
          <div key={id}>
            <p>{content}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Comments