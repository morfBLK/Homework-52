import React from "react";

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
  }

  return (
    <span className="card rank-k diams">
    <span className="rank">{props.rank}</span>
    <span className="suit">{suit}</span>
    </span>
  );

}


export default Card;