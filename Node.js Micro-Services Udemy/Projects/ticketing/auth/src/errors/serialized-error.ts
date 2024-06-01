export interface StandardError {
  field?: string
  message: string
}

export abstract class SerializableError extends Error {
  abstract statusCode: number
  
  constructor(message: string) {
    super(message)
    Object.setPrototypeOf(this, SerializableError.prototype)
  }

  abstract serialize(): StandardError[]
}