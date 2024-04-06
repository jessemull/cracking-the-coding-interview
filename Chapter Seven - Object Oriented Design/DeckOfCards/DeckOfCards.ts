import Card from './Card.ts'
import CardFactory from './CardFactory.ts'
import { RankMap, SuitMap } from './types.ts'

class DeckOfCards {
  cardFactory: CardFactory
  cards: Card[]
  dealt: Set<Card>

  constructor(suits?: SuitMap, ranks?: RankMap) {
    this.cardFactory = new CardFactory(suits, ranks)
    this.cards = this.createDeck()
    this.dealt = new Set()
  }

  createDeck(): Card[] {
    let cards: Card[] = []
    this.cardFactory.suits.forEach(suit => {
      this.cardFactory.ranks.forEach(rank => {
        cards.push(this.cardFactory.create(suit, rank))
      })
    })
    return cards
  }

  cut(index: number = this.getRandomIndex()): DeckOfCards {
    if (index < 0 || index > this.cards.length) {
      throw new Error('INVALID INDEX')
    }
    const topHalf = this.cards.slice(0, index)
    const bottomHalf = this.cards.slice(index, this.cards.length)
    this.cards = [...bottomHalf, ...topHalf]
    return this
  }

  deal(numCards: number): Card[] {
    if (numCards === undefined || numCards === null) {
      throw new Error('INVALID CARD NUMBER')
    }
    if (this.cards.length < numCards) {
      throw new Error('NOT ENOUGH CARDS')
    }
    const hand: Card[] = []
    for (let i = 0; i < numCards; i++) {
      const card = this.draw()
      if (card !== null) {
        hand.push(card)
        this.dealt.add(card)
      }
    }
    return hand
  }

  draw(): Card | null {
    const card = this.cards.pop()
    if (card !== undefined) {
      this.dealt.add(card)
    }
    return card || null
  }

  getRandomIndex(): number {
    return Math.floor(Math.random() * this.cards.length)
  }

  insert(card: Card, index: number = this.getRandomIndex()): DeckOfCards {
    if (index < 0 || index > this.cards.length) {
      throw new Error('INVALID INDEX')
    }
    if (!this.dealt.has(card)) {
      throw new Error('DUPLICATE CARD')
    }
    this.cards.splice(index, 0, card)
    this.dealt.delete(card)
    return this
  }

  reset(): DeckOfCards {
    this.cards = [...this.cards, ...Array.from(this.dealt)]
    return this
  }

  shuffle(numShuffles: number = 1): DeckOfCards {
    for (let k = 0; k < numShuffles; k++) {
      for (let i = this.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i)
        const temp = this.cards[i]
        this.cards[i] = this.cards[j]
        this.cards[j] = temp
      }
    }
    return this
  }

  sort() {
    this.cards.sort((card1, card2) => card1.position - card2.position)
    return this
  }

  toString() {
    let str = `${this.cards.length} CARDS\n--------\n`
    for (let i = 0; i < this.cards.length; i++) {
      str += this.cards[i].toString() + '\n'
    }
    return str
  }
}

export default DeckOfCards

