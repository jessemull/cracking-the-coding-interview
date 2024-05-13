import React from 'react'

const getComment = ({ content, status }) => {
  switch(status) {
    case 'APPROVED':
      return content
    case 'PENDING':
      return 'This comment is awaiting moderation...'
    case 'REJECTED':
      return 'This comment has been rejected.'
    default:
      return 'This comment is awaiting moderation...'
  }
}

const Comments = ({ comments }) => {
  return (
    <div className='mt-3'>
      <h3>Comments</h3>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <p>{getComment(comment)}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Comments