import express from 'express'
import axios from 'axios'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.post('/events', async (req, res) => {
  console.log('Received Event', req.body.type)

  const { data, type } = req.body

  switch(type) {
    case 'COMMENT_CREATED':
      const match = data.content.match(/orange/gi)
      const status = match ? 'REJECTED' : 'APPROVED'

      await axios.post('http://event-bus-srv:4005/events', { 
          type: 'COMMENT_MODERATED',
          data: {
            content: data.content,
            id: data.id,
            postId: data.postId,
            status
          }
        })
      
    default:
      break
  }

  res.send({})
})

app.listen(4003, () => {
  console.log('Listening on port 4003!')
})