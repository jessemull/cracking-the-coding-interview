import nats from 'node-nats-streaming'

console.clear()

const stan = nats.connect('ticketing', 'publisher', {
  url: 'http://localhost:4222'
})

stan.on('connect', () => {
  console.log('Publisher connected to NATS!')

  const message = {
    id: 'id',
    title: 'title',
    price: 777.00
  }
  
  stan.publish('ticket:created', JSON.stringify(message), () => {
    console.log('Event Publish', message)
  })
})
