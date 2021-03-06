function Card (value, suit){
    this.value = value
    this.suit = suit
}
Card.prototype.toString = function () {
  let cardName = ''
  if (this.value === 1 ) {
      cardName = 'Ace'
  } else if ( this.value === 13 ) {
      cardName = 'King'
  } else {
      cardName = this.value
  }
  return `Card { ${cardName} of ${this.suit} }`
}
const aceOfSpades = new Card(1, 'spades')
const tenOfHearts = new Card(10, 'hearts')
const kingOfDiamonds = new Card(13, 'diamonds')
console.log(aceOfSpades.toString())
console.log(tenOfHearts.toString())
console.log(kingOfDiamonds.toString())
function Deck () {
  this.deck = [];
  let suits = ['hearts', 'spades', 'clubs', 'diamonds']
  let values = ['Ace', 2,3,4,5,6,7,8,9,10,'jack','queen','king']
  for (let i = 0; i < 4; i++){
      for(let j = 0; j < 13; j++){
          this.deck.push(new Card(values[j], suits[i]))
      }  
  }
}
const arrayOfCards = new Deck()
console.log(arrayOfCards)