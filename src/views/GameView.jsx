import React, { useContext } from "react";
import { CardDeck, PlayerHand, ScoreTable } from "../components";
import { AppContext } from "../context";
import { resetPlayerData } from "../utils";

export const GameView = () => {
  const { setPlayerCard, setPlayerStatus } = useContext(AppContext);
  return (
    <>
      <PlayerHand />
      <CardDeck />
      <button
        style={{ alignSelf: "center" }}
        onClick={() => {
          resetPlayerData({ setPlayerCard, setPlayerStatus });
        }}
      >
        reset
      </button>
      <ScoreTable />
    </>
  );
};
