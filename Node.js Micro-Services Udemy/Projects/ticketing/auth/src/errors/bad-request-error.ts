import { SerializableError, StandardError } from './serialized-error'

export class BadRequestError extends SerializableError {
  message: string = 'Bad request.'
  statusCode: number = 400

  constructor(message: string) {
    super(message)
    this.message = message
    Object.setPrototypeOf(this, BadRequestError.prototype)
  }

  serialize(): StandardError[] {
    return [{ message: this.message }]
  }
}