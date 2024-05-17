/******* Annotating types in TypeScript *******/

// Can use primitive types for annotations.

let apples: number = 5

// Cannot re-assign a value with the wrong type.

apples = 10
// apples = 'string' -> Error due to wrong type.

// Can also use type annotations with special types like null/undefined.

const notDefined: undefined = undefined
const isNull: null = null
const date: Date = new Date()

// Use square brackets to indicate an array.

const strings: string[] = ['hello', 'world']
const bools: boolean[] = [true, false, true]
const nums: number[] = [1, 2, 3]

// Use a class name directly as a type.

class Taxi {}
const taxi: Taxi = new Taxi()

// Can use object types for annotation as well.

const point: { x: number; y: number } = {
  x: 10,
  y: 20
}

// Can also annotate functions.

const logString: (string) => void = (str) => {
  console.log(str)
}

const printString: (string) => void = function (str) {
  console.log(str)
}

// When to use annotations. If we omit the annotation after parsing the JSON, the type will be any.
// When we parse JSON, we can't really predict which type we would get. The output is dependent on what string is the input to the function.
// This means we have to tell typescript the type via annotation.

const json = '{"x": 10, "y": 20}'
const coordinates: { x: number; y: number } = JSON.parse(json)

// Can use the pipe indicator as a logical OR for the types.

let numberOrBoolean: number | boolean = 5
numberOrBoolean = true

// Can add annotations to the arguments and return value of a function.

const myFunction = (a: number, b: number): number => {
  return a + b
}

// If nothing is returned from the function we can use void.

const myVoidFunction = (a: number, b: number): void => {
  console.log(a + b)
}

// Also a special type called never. The end will never be reached.

const throwError = (msg: string): never => {
  throw new Error(msg)
}

// Can also destructure objects.

const myDestructuredObject = ({ coords: { x, y }  }: { coords: { x: number; y: number } }) => {
  console.log(x, y)
}

myDestructuredObject({ coords: { x: 10, y: 10 } })

// Can also annotate a function inside an object.

const myObject = {
  myFunction(name: string): string {
    return 'Hello' + name
  }
}

// Can also annotate when destructuring an object even when they are nested.

const parsed = JSON.parse('{"x": 10, "y": 20}')
const coords = JSON.parse('{ "coords":{"x": 10, "y": 20}}')
const { x, y }: { x: number; y: number } = parsed
const { coords: { x: x1, y: y1 } }: { coords: { x: number; y: number } } = coords

// Can also annotate arrays.

const myArray: string[] = ['hello', 'world']

// Can also annotate multi-dimensional arrays.

const multiArray: string[][] = [['hello'], ['world']]

// Type inference is used when pulling values from the array.

const str = myArray[0] // string

// Typescript will prevent incompatible values from being pushed onto the array.

// myArray.push(0) -> Error

// Type inference is helpful when using array methods. Allows for auto-complete.e

const mapped = myArray.map((str: string): string => str + str)

// We can mix types using the pipe operator in arrays.

const mixed: (string | number)[] = ['hello', 5]

// Typescript also support tuples. An array with a fixed number of elements with fixed types in a certain order.

const myTuple: [string, number, boolean] = ['hello', 5, true]

// Tuples must have an element for each type.

// const myTuple2: [string, number, boolean] = ['hello', 5] -> Error

// We can type tuples with type annotation to make things easier.

type MyTuple = [name: string, age: number, isStudent: boolean]

// Interfaces are used to create a new type, describing the property names and value types of an object.

interface CarInterface {
  make: string
  model: string
  year: number
}

const printCar = (car: CarInterface) => {
  const { make, model, year } = car
  console.log(make, model, year)
}

// We don't need to annotate the object with the interface. Typescript will infer the type.

const myCar: CarInterface = {
  make: 'Toyota',
  model: 'Corolla',
  year: 2020
}

printCar(myCar)

// We aren't limited to primitive types. We can use other interfaces, objects, functions or dates.

interface Driver {
  gender: string
  age: number
}

interface ComplexCar {
  driver: Driver
  licensePlate: {
    state: string
    number: number
  }
  make: string
  model: string
  year: Date
  summary: (name: string) => string
}

// An object passed to a function may have additional properties. It just needs to satisfy the properties in the interface.

interface SimpleCar {
  make: string
}

const mySimpleCar = {
  make: 'Toyota',
  model: 'Corolla'
}

const printSimpleCar = (car: SimpleCar) => {
  console.log(car.make)
}

printSimpleCar(mySimpleCar) // Okay!

// If we are careful, we can created re-usable code with interfaces.

interface Reportable {
  summary: () => void
}

const fruit = {
  seeded: true,
  type: 'apple',
  summary() {
    console.log(this.type)
  }
}

const vegetable = {
  iron: true,
  name: 'spinach',
  summary() {
    console.log(this.name)
  }
}

const printSummary = (item: Reportable) => {
  item.summary()
}