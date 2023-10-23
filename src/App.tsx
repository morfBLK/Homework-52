import './App.css'
import {useRef, useState} from "react";
import PlayCard from "./lib/PlayCard";
import CardDeck from "./lib/CardDeck";
import Card from "./lib/Card";
import Combination from "./lib/Combination";

function App() {

  const [deck, setDeck] = useState<PlayCard[]>([]);
  const [win, setWin] = useState('')
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

  const changeCard = (number: number) => {
    const random = Math.floor(Math.random() * ref.current.length);
    const replacedCard = ref.current.splice(random, 1);
    const flop: PlayCard[] = [...deck];
    flop.splice(number, 1, replacedCard[0])
    setDeck(flop);

    setWin(new Combination(flop).getOutcome());
    if (win === 'flash') {
      alert('WIN FLASH')
    }
  }

  let disabled = false

  if (ref.current.length < 1) {
    disabled = true
  }

  if (!deck.length) {
    return (
      <button onClick={dealCards}>Deal Cards</button>
    )
  } else {
    return (
      <div>
        <button onClick={dealCards}>Deal Cards</button>
        <div className='card-box'>
          <div>
            <Card rank={deck[0].rank} suit={deck[0].suit}/>
            <button disabled={disabled} onClick={() => changeCard(0)}>Replace</button>
          </div>
          <div>
            <Card rank={deck[1].rank} suit={deck[1].suit}/>
            <button disabled={disabled} onClick={() => changeCard(1)}>Replace</button>
          </div>
          <div>
            <Card rank={deck[2].rank} suit={deck[2].suit}/>
            <button disabled={disabled} onClick={() => changeCard(2)}>Replace</button>
          </div>
          <div>
            <Card rank={deck[3].rank} suit={deck[3].suit}/>
            <button disabled={disabled} onClick={() => changeCard(3)}>Replace</button>
          </div>
          <div>
            <Card rank={deck[4].rank} suit={deck[4].suit}/>
            <button disabled={disabled} onClick={() => changeCard(4)}>Replace</button>
          </div>
        </div>
        <div>
          <h1>{win}</h1>
        </div>
      </div>

    )
  }
}

export default App


