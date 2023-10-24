import playCard from "./PlayCard";

class Combination {
  constructor(public poker: playCard[]) {
  }

  getOutcome() {
    const pokerMass = this.poker;
    let pairs = 0;
    let flash = 0;

    for (let i = 0; i < pokerMass.length; i++) {
      for (let k = 0; k < pokerMass.length; k++) {
        if (pokerMass[i].rank === pokerMass[k].rank && pokerMass[i].suit !== pokerMass[k].suit) {
          pairs++
        } else if (pokerMass[i].suit === pokerMass[k].suit && pokerMass[i].rank !== pokerMass[k].rank) {
          flash++
        }
      }
    }

    if (flash === 20) {
      return 'flash'
    } else if (pairs === 4) {
      return 'two pair'
    } else if (pairs === 6) {
      return 'three of kind'
    } else if (pairs === 2) {
      return 'one pair'
    } else {
      return 'senior card'
    }


  }
}

export default Combination