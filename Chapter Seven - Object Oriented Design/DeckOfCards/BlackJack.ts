import DeckOfCards from './DeckOfCards.ts'
import { BlackJackHand } from './Hand.ts'

const CARDS_PER_HAND = 2

class BlackJack {
  deck: DeckOfCards
  hands: BlackJackHand[]
  numPlayers: number

  constructor(numPlayers: number = 1) {
    this.numPlayers = numPlayers
    this.deck = new DeckOfCards()
    this.hands = []
  }

  get allHandsStayedOrBusted() {
    return this.hands.slice(0, -1).every(hand => hand.stay || hand.busted)
  }

  cashIn() {
    if (!this.allHandsStayedOrBusted) {
      throw new Error('ALL HANDS MUST STAY OR BUST BEFORE CASHING IN')
    }

    const dealerTotal = this.hands[this.hands.length - 1].total
    const dealerBusted = this.hands[this.hands.length - 1].busted

    console.log('**************************************\n')

    for (let i = 0; i < this.hands.length - 1; i++) {
      const playerTotal = this.hands[i].total
      const playerBusted = this.hands[i].busted

      console.log(`Player ${i + 1}`)
      console.log('---------------------')

      if (playerBusted) {
        console.log('You busted! You lose!')
      } else if (playerTotal < dealerTotal && !dealerBusted) {
        console.log(`${playerTotal} < ${dealerTotal}! You lose!`)
      } else if (dealerBusted) {
        console.log('Dealer busted! You win!')
      } else {
        console.log(`${playerTotal} > ${dealerTotal}! You win!`)
      }
    }

    console.log('\n**************************************\n')
  }

  deal() {
    this.deck.shuffle().cut(this.deck.cards.length / 2)

    for (let i = 0; i < this.numPlayers + 1; i++) {
      const hand = new BlackJackHand(this.deck.deal(CARDS_PER_HAND))
      this.hands.push(hand)
    }

    this.print()
  }

  hit(player: number) {
    if (player === this.hands.length - 1 && !this.allHandsStayedOrBusted) {
      throw new Error('ALL PLAYERS MUST STAY OR BUST BEFORE DEALER TAKES A TURN')
    }

    if (this.hands[player].busted) {
      throw new Error('ALREADY BUSTED')
    }

    const card = this.deck.draw()
    if (card !== null) {
      this.hands[player].add(card)
    }

    this.print()
  }

  print() {
    console.log('**************************************\n')

    this.hands.forEach((hand, index) => {
      const name = index === this.hands.length - 1 ? 'Dealer' : `Player ${index + 1}`
      this.printHand(name, hand)
    })
    
    console.log('**************************************\n')
  }

  printHand(player, hand) {
    console.log(player)
    console.log('---------------------')
    console.log(hand.toString())
    console.log(`Score: ${hand.busted ? 'Busted!' : hand.total}\n`)
  }

  reset() {
    this.hands = []
    this.deal()
  }

  stay(player: number) {
    this.hands[player].stay = true
  }
}

export default BlackJack