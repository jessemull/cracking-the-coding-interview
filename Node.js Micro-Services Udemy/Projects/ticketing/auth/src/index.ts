import 'express-async-errors'
import cookieSession from 'cookie-session'
import express from 'express'
import mongoose from 'mongoose'
import { json } from 'body-parser'
import { currentUserRouter } from './routes/current-user'
import { signinRouter } from './routes/signin'
import { signupRouter } from './routes/signup'
import { signoutRouter } from './routes/signout'
import { errorHandler } from './middlewares/error-handler'
import { NotFoundError } from './errors/not-found-error'

const app = express()

app.set('trust proxy', true)

// Use JSON body

app.use(json())
app.use(cookieSession({
  secure: true,
  signed: false
}))

// Routes

app.use(currentUserRouter)
app.use(signinRouter)
app.use(signupRouter)
app.use(signoutRouter)

// Handle 404s for routes

app.all('*', async () => {
  throw new NotFoundError()
})

// Error handling

app.use(errorHandler)

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


