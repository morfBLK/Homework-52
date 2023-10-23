import './App.css'
import {useRef, useState} from "react";
import PlayCard from "./lib/PlayCard";
import CardDeck from "./lib/CardDeck";
import Card from "./lib/Card";

function App() {

  const [deck, setDeck] = useState<PlayCard[]>([]);
  const ref = useRef(deck)
  const dealCards = () => {
    const newDeck = new CardDeck();
    const flop = newDeck.getCards(5);
    ref.current = newDeck.deck;

    setDeck(flop);
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
          <Card rank={deck[0].suit} suit={deck[0].rank}/>
          <Card rank={deck[1].suit} suit={deck[1].rank}/>
          <Card rank={deck[2].suit} suit={deck[2].rank}/>
          <Card rank={deck[3].suit} suit={deck[0].rank}/>
          <Card rank={deck[4].suit} suit={deck[0].rank}/>
        </div>
      </div>

    )
  }
}

export default App


