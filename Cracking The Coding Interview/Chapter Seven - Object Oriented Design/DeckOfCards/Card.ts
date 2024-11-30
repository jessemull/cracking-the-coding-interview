class Card {
  name: string
  position: number
  rank: number
  suit: number

  constructor(suit: number, rank: number, position: number, name: string) {
    this.name = name || ''
    this.position = position || 0
    this.rank = rank || 0
    this.suit = suit || 0
  }

  toString(): string {
    return this.name
  }
}

export default Card