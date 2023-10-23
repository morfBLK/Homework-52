import './App.css'
import {useRef, useState} from "react";
import PlayCard from "./lib/PlayCard";
import CardDeck from "./lib/CardDeck";
import Card from "./lib/Card";
import Combination from "./lib/Combination";

function App() {

  const [deck, setDeck] = useState<PlayCard[]>([]);
  const [win, setWin] =useState('')
  const ref = useRef(deck)
  const dealCards = () => {
    const newDeck = new CardDeck();
    const flop = newDeck.getCards(5);
    ref.current = newDeck.deck;

    setDeck(flop);

    setWin(new Combination(flop).getOutcome());
    if (win === 'flash') {
      alert('WIN FLASH')
    }
  }

  if (!deck.length) {
    return (
      <button onClick={dealCards}>Deal Cards</button>
    )
  } else if (deck.length) {
    return (
      <div>
        <button onClick={dealCards}>Deal Cards</button>
        <div className= 'card-box'>
          <Card rank={deck[0].rank} suit={deck[0].suit}/>
          <Card rank={deck[1].rank} suit={deck[1].suit}/>
          <Card rank={deck[2].rank} suit={deck[2].suit}/>
          <Card rank={deck[3].rank} suit={deck[0].suit}/>
          <Card rank={deck[4].rank} suit={deck[0].suit}/>
        </div>
        <div>
          <h1>{win}</h1>
        </div>
      </div>

    )
  }
}

export default App


