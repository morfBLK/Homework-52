import PlayCard from "./PlayCard";

class CardDeck {
  public deck: PlayCard[] = [];

  constructor(
    public denomination = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
    public suit = ['diams', 'hearts', 'clubs', 'spades'],
  ) {
    for (let i = 0; i < suit.length; i++) {
      for (let k = 0; k < denomination.length; k++) {
        this.deck.push(new PlayCard(suit[i], denomination[k]))

      }
    }
  }

  getCard() {
    const random = Math.floor(Math.random() * (this.deck.length));
    return this.deck.splice(random, 1)[0];
  }

  getCards(howMany: number) {
    const cardMass = []
    for (let i = 0; i < howMany; i++) {
      cardMass.push(this.getCard());
    }
    return cardMass;
  }


}

export default CardDeck