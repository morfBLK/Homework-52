import React from "react";
import '../cards.css';

interface CardProps {
  rank: string;
  suit: string;
}

const Card: React.FC<CardProps> = props => {
  let suit: string = '';
  switch (props.suit) {
    case 'diams':
      suit = '♦'
      break;
    case 'hearts':
      suit = '♥'
      break;
    case 'clubs':
      suit = '♣'
      break;
    case 'spades':
      suit = '♠'
      break;
    default:
      break;
  }

  const className = 'card rank-' + (props.rank.toLowerCase()) + ' ' + props.suit;

  return (
    <div className="playingCards faceImages">
        <span className={className}>
          <span className="rank">{props.rank}</span>
          <span className="suit">{suit}</span>
        </span>
    </div>

  );

}


export default Card