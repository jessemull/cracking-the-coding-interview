import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()

app.use(bodyParser.json())
app.use(cors())

// Just store posts in memory for now.

const posts = {}

app.get('/posts', (req, res) => {
  res.send(posts)
})

app.post('/events', (req, res) => {
  console.log('Received Event', req.body)

  const { data, type } = req.body

  switch(type) {
    case 'POST_CREATED':
      posts[data.id] = {
        id: data.id,
        comments: [],
        title: data.title
      }
      console.log('Post Created', posts[data.id])
      break
    case 'COMMENT_CREATED':
      posts[data.postId].comments.push({ id: data.id, content: data.content })
      console.log('Comment Created', posts[data.postId])
      break
    default:
      break
  }

  res.status(200).send({})
})

app.listen(4002, () => {
  console.log('Listening on port 4002!')
})