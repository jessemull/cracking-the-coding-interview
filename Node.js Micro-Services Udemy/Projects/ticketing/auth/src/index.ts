import app from './app'
import mongoose from 'mongoose'

const start = async () => {
  if (!process.env.JWT_SECRET_KEY) {
    throw new Error('JWT Secret key must be defined.')
  }

  try {
    await mongoose.connect('mongodb://auth-mongo-srv:27017/auth')
  } catch (err) {
    console.error(err)
  }

  console.log('Connected to MongoDB...')
  
  app.listen(3000, () => {
    console.log('Listening on port 3000!')
  })
}

start()


