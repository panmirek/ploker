import React, { useContext } from "react";
import { AppContext } from "../context";
import { PlayerStatus } from "../utils";

export const PlayerHand = () => {
  const { player } = useContext(AppContext);
  const { card, status } = player;
  return (
    <div>
      {card.number ? (
        <>
          <p style={{ lineHeight: 3 }}>
            Your bet is <b>{card.number}</b>
            {!(status === PlayerStatus.confirmed) && (
              <>
                , click{" "}
                <span role="img" aria-label="thumb up">
                  👍
                </span>{" "}
                to confirm your choice.
              </>
            )}
          </p>
        </>
      ) : (
        <p style={{ lineHeight: 3 }}>
          Please, select a card to bet your estimation.
        </p>
      )}
    </div>
  );
};
