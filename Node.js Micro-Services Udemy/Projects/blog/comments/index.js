import express from 'express'
import axios from 'axios'
import bodyParser from 'body-parser'
import cors from 'cors'
import { randomBytes } from 'crypto'

const app = express()

// Just store the comments in memory for now.

const commentsByPostId = {}

app.use(bodyParser.json()) 
app.use(cors())

app.get('/posts/:id/comments', (req, res) => {
  const { id } = req.params
  const comments = commentsByPostId[id] || []
  res.status(200).send(comments)
})

app.post('/posts/:id/comments', (req, res) => {
  const commmentId = randomBytes(4).toString('hex')
  const { content } = req.body
  const comments = commentsByPostId[req.params.id] || []

  comments.push({ id: commmentId, content, status: 'PENDING' })
  commentsByPostId[req.params.id] = comments

  axios.post('http://localhost:4005/events', {
    data: {
      id: commmentId,
      content,
      postId: req.params.id,
      status: 'PENDING'
    },
    type: 'COMMENT_CREATED',
  })

  res.status(201).send(comments)
})

app.post('/events', async (req, res) => {
  console.log('Received Event', req.body.type)

  const { data, type } = req.body

  switch(type) {
    case 'COMMENT_MODERATED':
      const comments = commentsByPostId[data.postId] || []
      const comment = comments.find(comment => comment.id === data.id)
      comment.status = data.status
      await axios.post('http://localhost:4005/events', {
        data: {
          id: data.id,
          content: data.content,
          postId: data.postId,
          status: data.status
        },
        type: 'COMMENT_UPDATED',
      })
    default:
      break
  }

  res.send({})
})

app.listen(4001, () => {
  console.log('Listening on port 4001!')
})