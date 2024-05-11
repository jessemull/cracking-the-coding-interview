import { EventEmitter } from 'events'

class Ticker extends EventEmitter {
  callback: (err: Error | null, numTicks?: number) => void
  ms: number

  constructor(ms: number, callback: (err: Error | null, numTicks?: number) => void) {
    super()
    this.callback = callback
    this.ms = ms
  }

  // Exercise requires emitting a tick before recursing.

  tick() {
    process.nextTick(() => this.emit('tick'))
    this.emitTick()
    return this
  }

  emitTick(ms = this.ms) {
    
    // If time is divisble by five emit error and return err to callback.

    if (Date.now() % 5 === 0) {
      const err = Error('Timestamp divisible by 5!')
      this.callback(err)
      this.emit('error', err)
    }

    // Otherwise check if there are no more ticks and return num ticks or recurse.

    if (ms <= 0) {
      this.callback(null, this.ms / 50)
    } else {
      setTimeout(() => {
        this.emit('tick')
        this.emitTick(ms - 50)
      }, 50)
    }

    // Return emitter for chaining 

    return this
  }
}

const main = () => {
  const ticker = new Ticker(5000, (err, numTicks) => {
    console.log(err ? err : numTicks)
  })
  ticker
    .tick()
    .on('error', (err) => console.log(err))
    .on('tick', () => console.log('tick'))
}

main()