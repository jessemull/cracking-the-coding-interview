import Card from './Card'
import { RankMap, SuitMap } from './types'

export const SUITS = {
  1: 'CLUBS',
  2: 'DIAMONDS',
  3: 'HEARTS',
  4: 'SPADES'
}

export const RANKS = {
  1: 'ACE',
  2: 'TWO',
  3: 'THREE',
  4: 'FOUR',
  5: 'FIVE',
  6: 'SIX',
  7: 'SEVEN',
  8: 'EIGHT',
  9: 'NINE',
  10: 'TEN',
  11: 'JACK',
  12: 'QUEEN',
  13: 'KING'
}

class CardFactory {
  rankMap: RankMap
  suitMap: SuitMap

  constructor(ranks: RankMap = RANKS, suits: SuitMap = SUITS) {
    this.rankMap = ranks || {}
    this.suitMap = suits || {}
  }

  create(suit: number, rank: number): Card {
    if (this.suitMap[suit] === undefined) {
      throw new Error('INVALID SUIT')
    }

    if (this.rankMap[rank] === undefined) {
      throw new Error('INVALID RANK')
    }
    
    const position = (suit - 1) * this.ranks.length + rank
    const name = `${this.rankMap[rank]} of ${this.suitMap[suit]}`

    return new Card(suit, rank, position, name)
  }

  get suits(): number[] {
    return Object.keys(this.suitMap).map(key => parseInt(key, 10))
  }

  get ranks(): number[] {
    return Object.keys(this.rankMap).map(key => parseInt(key, 10))
  }
}

export default CardFactory