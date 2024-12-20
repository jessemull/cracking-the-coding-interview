import express from 'express'
import axios from 'axios'
import bodyParser from 'body-parser'
import cors from 'cors'
import { randomBytes } from 'crypto'

const app = express()

// Just store the posts in memory for now.

const posts = {}

app.use(bodyParser.json())
app.use(cors())

app.get('/posts', (req, res) => {
  res.send(posts)
})

app.post('/posts/create', async (req, res) => {
  const id = randomBytes(4).toString('hex')
  const { title } = req.body

  posts[id] = {
    id,
    title
  }

  await axios.post('http://event-bus-srv:4005/events', {
    data: {
      id,
      title
    },
    type: 'POST_CREATED',
  })

  res.status(201).send(posts[id])
})

app.post('/events', (req, res) => {
  console.log('Received Event', req.body.type)
})

app.listen(4000, () => {
  console.log('Listening on port 4000!')
})