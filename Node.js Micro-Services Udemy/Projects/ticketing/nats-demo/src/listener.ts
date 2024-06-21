import nats, { Message } from 'node-nats-streaming'
import { randomBytes } from 'crypto'

console.clear()

const stan = nats.connect('ticketing', randomBytes(4).toString('hex'), {
  url: 'http://localhost:4222'
})

const options = stan.subscriptionOptions()
  .setManualAckMode(true)
  .setDeliverAllAvailable()
  .setDurableName('ticket-created-listener')

stan.on('connect', () => {
  console.log('Listener connected to NATS!')

  stan.on('close', () => {
    console.log('NATS connection closed!')
    process.exit()
  })

  const subscription = stan.subscribe('ticket:created', 'ticket-created-queue-group', options)
  
  subscription.on('message', (msg: Message) => {
    console.log('Event Received')
    console.log('--------------')
    console.log('Event Subject:', msg.getSubject())
    console.log('Event Sequence:', msg.getSequence())
    console.log('Event Data:', JSON.parse(msg.getData().toString()))
    console.log('\n')

    msg.ack()
    
    console.log('Event Processed')
    console.log('---------------')
    console.log('Event Subject:', msg.getSubject())
    console.log('Event Sequence:', msg.getSequence() + '\n')
  })

})

process.on('SIGINT', () => stan.close())
process.on('SIGTERM', () => stan.close())