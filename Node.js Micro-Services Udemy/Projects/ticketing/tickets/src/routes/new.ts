import { BadRequestError, requireAuth, validateRequest } from '@mytix/common'
import { Router, Request, Response } from 'express'
import { body } from 'express-validator'
import { Ticket } from '../models/ticket'

const router = Router()

const validationRules = [
  body('title')
    .isString()
    .withMessage('Title must be a valid string.')
    .not()
    .isEmpty()
    .withMessage('Title is required.'),
  body('price')
    .isFloat({ gt: 0 })
    .withMessage('Price must be greater than zero.')
    .not()
    .isEmpty()
    .withMessage('Price is required.')
]

router.post('/api/tickets', requireAuth, validationRules, validateRequest, async (req: Request, res: Response) => {
  const { price, title } = req.body
  const { id } = req.currentUser

  const existing = await Ticket.findOne({ title, userId: id })

  if (existing) {
    throw new BadRequestError('A ticket with that title already exists.')
  }

  const ticket = Ticket.build({ price, title, userId: id })
  await ticket.save()

  res.status(201).send(ticket)
})

export {
  router as createTicketRouter
}