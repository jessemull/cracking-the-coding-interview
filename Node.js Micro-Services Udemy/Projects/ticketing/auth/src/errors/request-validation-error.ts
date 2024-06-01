import { ValidationError } from 'express-validator'
import { SerializableError, StandardError } from './serialized-error'

export class RequestValidationError extends SerializableError {
  errors: ValidationError[]
  statusCode: number = 400

  constructor(errors: ValidationError[]) {
    super('Request validation error.')
    this.errors = errors
    Object.setPrototypeOf(this, RequestValidationError.prototype)
  }

  serialize(): StandardError[] {
    return this.errors.map((error) => {
      if (error.type === 'field') {
        return { message: error.msg, field: error.path }
      }
    })
  }
}