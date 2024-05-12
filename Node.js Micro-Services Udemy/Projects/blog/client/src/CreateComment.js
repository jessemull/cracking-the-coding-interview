import React, { useState } from 'react'
import axios from 'axios'

const CreateComment = ({ postId }) => {
  const [comment, setComment] = useState('')

  const createComment = async (event) => {
    event.preventDefault()
    await axios.post(`http://localhost:4001/posts/${postId}/comments`, { content: comment })
    setComment('')
  }

  const onChange = (event) => {
    setComment(event.target.value || '')
  }

  return (
    <form onSubmit={createComment}>
      <div className="form-group">
        <label>Comment</label>
        <input className="form-control" onChange={onChange} type="text" value={comment} />
      </div>
      <button className="mt-2 btn btn-primary">Submit</button>
    </form>
  )
}

export default CreateComment