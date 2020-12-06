import React, { useContext } from "react";
import { AppContext } from "../context";

export const ScoreTable = () => {
  const { player, players } = useContext(AppContext);
  return (
    <div className="players__table">
      {players.map(({ index, name, status }) => (
        <dl
          key={index}
          className={`player${name === player.name ? " player_current" : ""}`}
        >
          <dt>{name}</dt>
          <dd>{status}</dd>
        </dl>
      ))}
    </div>
  );
};
