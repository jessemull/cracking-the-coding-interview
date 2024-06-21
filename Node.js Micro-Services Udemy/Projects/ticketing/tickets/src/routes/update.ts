import { BadRequestError, NotAuthorizedError, NotFoundError, requireAuth, validateRequest } from '@mytix/common'
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

router.put('/api/tickets/:id', requireAuth, validationRules, validateRequest, async (req: Request, res: Response) => {
  const { price, title } = req.body
  const { id } = req.params
  const { id: userId } = req.currentUser

  const ticket = await Ticket.findById(id)

  if (!ticket) {
    throw new NotFoundError()
  }

  if (ticket.userId !== userId) {
    throw new NotAuthorizedError()
  }

  ticket.set({
    price,
    title
  })

  await ticket.save()

  res.status(200).send(ticket)
})

export {
  router as updateTicketRouter
}