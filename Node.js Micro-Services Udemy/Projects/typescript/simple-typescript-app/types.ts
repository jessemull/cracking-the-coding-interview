const today = new Date() // Hover over the variable to see the type.
today.getMonth()         // Can use auto-complete to see the methods available on the Date object.
// today.notValid()      // Can see errors in the editor as well.

const person = { name: 'George Washington' } // Without an interface, typescript just shows the entire object.

class Color {}
const red = new Color() // Classes allow hover over the variable to see the type.