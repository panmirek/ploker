import React, { useContext } from "react";

import { AppContext } from "../context";
import { PokerCard } from ".";

export const CardDeck = () => {
  const { definedCards } = useContext(AppContext);
  return (
    <ol className="poker-table">
      {definedCards.map((value) => (
        <li className="poker-table__card" key={`card-${value}`}>
          <PokerCard value={value} />
        </li>
      ))}
    </ol>
  );
};
