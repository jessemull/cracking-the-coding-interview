import { SerializableError, StandardError } from './serialized-error'

export class NotFoundError extends SerializableError {
  message: string = 'Not Found'
  statusCode: number = 404

  constructor() {
    super('Not found error.')
    Object.setPrototypeOf(this, NotFoundError.prototype)
  }

  serialize(): StandardError[] {
    return [{ message: this.message }]
  }
}