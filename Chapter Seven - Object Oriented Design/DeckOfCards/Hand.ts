import Card from './Card.ts';

class Hand {
  cardMap: Map<number, Card>

  constructor(cards: Card[] = []) {
    this.cardMap = new Map<number, Card>()
    cards.forEach(card => {
      this.cardMap.set(card.position, card)
    })
  }

  add(card: Card) {
    this.cardMap.set(card.position, card)
  }

  get cards(): Card[] {
    return Array.from(this.cardMap.values()).sort((card1, card2) => card1.position - card2.position)
  }

  getRandomIndex(): number {
    return Math.floor(Math.random() * this.cards.length)
  }

  random(): Card {
    return this.cards[this.getRandomIndex()]
  }

  remove(toRemove: Card): Card | null {
    const card = this.cardMap.get(toRemove.position)
    if (card !== undefined) {
      this.cardMap.delete(toRemove.position)
    }
    return card || null
  }

  toString() {
    let str = ''
    this.cards.forEach(card => {
      str += card.toString() + '\n'
    })
    return str
  }
}

class BlackJackHand extends Hand {
  stay: boolean

  constructor(cards: Card[] = []) {
    super(cards)
    this.stay = false
  }

  get busted(): boolean {
    return this.total > 21
  }

  get total(): number {
    let total = 0
    for (let [position, card] of this.cardMap) {
      total += card.rank <= 9 ? card.rank : 10
    }
    return total
  }
}

export {
  BlackJackHand,
  Hand
} 