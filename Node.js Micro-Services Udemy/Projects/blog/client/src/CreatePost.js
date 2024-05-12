import React, { useState } from 'react'
import axios from 'axios'

const CreatePost = () => {
  const [title, setTitle] = useState('')

  const createPost = async (event) => {
    event.preventDefault()
    await axios.post('http://localhost:4000/posts', { title })
    setTitle('')
  }

  const onChange = (event) => {
    setTitle(event.target.value || '')
  }

  return (
    <form onSubmit={createPost}>
      <div className="form-group">
        <label>Title</label>
        <input className="form-control" onChange={onChange} type="text" value={title} />
      </div>
      <button className="mt-2 btn btn-primary">Submit</button>
    </form>
  )
}

export default CreatePost