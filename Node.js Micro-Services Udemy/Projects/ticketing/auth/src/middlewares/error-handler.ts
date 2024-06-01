import { Request, Response, NextFunction } from 'express'
import { SerializableError } from '../errors/serialized-error'

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof SerializableError) {
    return res.status(err.statusCode).send(err.serialize())
  }
  return res.status(500).send('5XX: Something went wrong.')
}