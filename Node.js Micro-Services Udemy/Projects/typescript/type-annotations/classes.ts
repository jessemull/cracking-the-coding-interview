class Vehicle {
  protected type: string

  constructor(type: string) {
    this.type = type
  }

  public drive(): void {
    console.log('Driving...')
  }

  protected honk(): void {
    this.beep()
  }

  private beep(): void {
    console.log('Honk!')
  }
}

class Car extends Vehicle {
  private make: string
  public model: string 

  // Can also add public to the constructor arguments to automatically assign them to the class.

  constructor(make: string, model: string, public color: string) {
    super('car')
    this.color = color
    this.make = make
    this.model = model
  }

  // Cannot override the drive method as private/protected.
  // private drive(): void {}   // Error
  // protected drive(): void {} // Error

  // Cannot call beep because it is private.
  // Can call honk because it is protected.

  public makeNoise(): void {
    this.honk()
  }
  
  public getMake(): string {
    return this.make
  }

  public getType(): string {
    return this.type
  }
}

const car = new Car('Nissan', 'Sentra', 'red')
car.drive()
car.getMake()   // Okay!
car.model       // Okay!
car.makeNoise() // Okay!
car.color       // Okay!
// car.type     // Error -> protected field
// car.beep()   // Error -> private method
// car.honk()   // Error -> protected method
// vehicle.make -> Error -> private field