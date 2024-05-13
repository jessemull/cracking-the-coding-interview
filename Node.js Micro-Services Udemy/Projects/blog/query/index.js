import express from 'express'
import axios from 'axios'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()

app.use(bodyParser.json())
app.use(cors())

// Just store posts in memory for now.

const posts = {}

const handleEvent = (type, data) => {
  switch(type) {
    case 'COMMENT_UPDATED':
      const comment = posts[data.postId].comments.find(comment => comment.id === data.id)
      comment.content = data.content
      comment.status = data.status
      console.log('Comment Updated', posts[data.postId])
      break
    case 'POST_CREATED':
      posts[data.id] = {
        id: data.id,
        comments: [],
        title: data.title
      }
      console.log('Post Created', posts[data.id])
      break
    case 'COMMENT_CREATED':
      posts[data.postId].comments.push({ id: data.id, content: data.content, status: data.status })
      console.log('Comment Created', posts[data.postId])
      break
    default:
      break
  }
}

app.get('/posts', (req, res) => {
  res.send(posts)
})

app.post('/events', (req, res) => {
  console.log('Received Event', req.body)

  const { data, type } = req.body

  handleEvent(type, data)

  res.status(200).send({})
})

app.listen(4002, async () => {
  console.log('Listening on port 4002!')
  await axios.get('http://localhost:4005/events').then(res => {
    for (let { data, type } of res.data) {
      console.log('Processing event: ', type, data)
      handleEvent(type, data)
    }
  }).catch(err => console.log(err))
})