import { SerializableError, StandardError } from './serialized-error'

export class DatabaseConnectionError extends SerializableError {
  message: string = 'Error connecting to database.'
  statusCode: number = 500

  constructor() {
    super('Database connection error.')
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype)
  }

  serialize(): StandardError[] {
    return [{ message: this.message }]
  }
}