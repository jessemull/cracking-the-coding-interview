import express from 'express'
import axios from 'axios'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json())
app.use(cors())

// Just store the event data in memory for now.

app.post('/events', (req, res) => {
  const event = req.body
  axios.post('http://localhost:4000/events', event)
  axios.post('http://localhost:4001/events', event)
  axios.post('http://localhost:4002/events', event)
  res.send({})
})

app.listen(4005, () => {
  console.log('Listening on 4005!')
})