import express from 'express'
import axios from 'axios'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json())
app.use(cors())

// Just store the event data in memory for now.

const events = []

app.post('/events', (req, res) => {
  const event = req.body

  events.push(event)

  axios.post('http://posts-clusterip-srv:4000/events', event).catch(err => console.log(err))
  axios.post('http://comments-srv:4001/events', event).catch(err => console.log(err))
  axios.post('http://query-srv:4002/events', event).catch(err => console.log(err))
  axios.post('http://moderation-srv:4003/events', event).catch(err => console.log(err))

  res.send({})
})

// Simulates replay of all events that have occurred so far.

app.get('/events', (req, res) => {
  res.send(events)
})

app.listen(4005, () => {
  console.log('Listening on 4005!')
})