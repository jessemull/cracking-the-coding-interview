import mongoose from 'mongoose'
import { Order, OrderStatus } from './order'

// Interface describing required properties to create a new ticket.

interface TicketAttributes {
  price: Number
  title: string
}

// Interface that describes the properties on a ticket model.

interface TicketModel extends mongoose.Model<any> {
  build(ticket: TicketAttributes): TicketDocument
}

// Interface that describe the properties on a ticket document.

export interface TicketDocument extends mongoose.Document {
  isReserved: () => Promise<boolean>
  price: Number
  title: string
}

const schema = new mongoose.Schema({
  price: {
    type: Number,
    required: true,
    min: 0
  },
  title: {
    type: String,
    required: true
  }
}, {
  toJSON: {
    transform(doc, ret) {
      ret.id = ret._id
      delete ret._id
      delete ret.__v
    }
  }
})

schema.statics.build = (ticket: TicketAttributes) => {
  return new Ticket(ticket)
}

// Requires function keyword in order to bind this to the function.

schema.methods.isReserved = async function() {
  const reserved = await Order.findOne({ 
    status: {
      $in: [OrderStatus.Created, OrderStatus.AwaitingPayment, OrderStatus.Complete]
    },
    ticket: this
  })
  return Boolean(reserved)
}

const Ticket = mongoose.model<TicketAttributes, TicketModel>('Ticket', schema)

export { Ticket }