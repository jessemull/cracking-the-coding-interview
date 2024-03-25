// We can just create a queue and use it. A queue is already FIFO must be missing something.
// Nope not missing anything, we can just use two queues and a timestamp or just use a queue.

const Queue = require('../../../Data Structures/queue')
const {
  Animal,
  ANIMAL_TYPES
} = require('../helpers/helpers')

class AnimalQueue {
  constructor() {
    this.count = 0
    this.dogs = new Queue()
    this.cats = new Queue()
  }

  enqueue(animal) {
    const queue = animal.type === ANIMAL_TYPES.CAT ? this.cats : this.dogs
    animal.count = this.count
    this.count++
    queue.add(animal)
    return animal
  }

  dequeue() {
    if (this.dogs.isEmpty() && this.cats.isEmpty()) {
      return null
    } else if (this.dogs.isEmpty()) {
      return this.cats.remove()
    } else if (this.cats.isEmpty()) {
      return this.dogs.remove()
    } else {
      return this.dogs.peek().count < this.cats.peek().count ? this.dogs.remove() : this.cats.remove()
    }
  }
}

const main = async () => {
  const queue = new AnimalQueue()
  queue.enqueue(new Animal(ANIMAL_TYPES.DOG))
  queue.enqueue(new Animal(ANIMAL_TYPES.CAT))                
  queue.enqueue(new Animal(ANIMAL_TYPES.CAT))
  console.log(queue.dequeue())                // Dog
  queue.enqueue(new Animal(ANIMAL_TYPES.DOG))
  console.log(queue.dequeue())                // Cat
  console.log(queue.dequeue())                // Cat
  console.log(queue.dequeue())                // Dog
  console.log(queue.dequeue())                // null
}

main()
