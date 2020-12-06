import React, { useContext } from "react";

import { AppContext } from "../context";
import { ControlButton } from ".";
import { ControlBtnType, GameName, PlayerStatus } from "../utils";

export const PokerCard = ({ value, title = GameName }) => {
  const {
    playerCard,
    setPlayerCard,
    setPlayerStatus,
    player,
    definedCards
  } = useContext(AppContext);

  const handleCardClicked = (e) => {
    const cardIndex = definedCards.indexOf(value);
    setPlayerCard({ number: definedCards[cardIndex] });
  };

  const handleOnBlur = (e) => {
    e.stopPropagation();
    setPlayerCard({ number: undefined });
  };

  const handleConfirmCard = (e) => {
    e.stopPropagation();
    setPlayerStatus(PlayerStatus.confirmed);
  };

  const isChosen = value === playerCard.number;
  const confirmedChoice = player.status === PlayerStatus.confirmed;
  const isChosenAndConfirmed = isChosen && confirmedChoice;
  const isRejectedAndConfirmed = !isChosen && confirmedChoice;

  return (
    <div
      className={`card-back-container${
        isRejectedAndConfirmed ? " card_rejected" : ""
      }`}
      onClick={confirmedChoice ? () => {} : handleCardClicked}
    >
      <dl
        className={`card${isChosen ? " card_chosen" : ""}${
          isChosenAndConfirmed ? " card_confirmed" : ""
        }${isRejectedAndConfirmed ? " card_rejected" : ""}`}
      >
        <dt className="card__value">{value}</dt>
        <dd className="card__title">{title}</dd>
        {isChosen && !confirmedChoice && (
          <div className="card-controls">
            <ControlButton
              type={ControlBtnType.confirm}
              action={handleConfirmCard}
            />
            <ControlButton type={ControlBtnType.clear} action={handleOnBlur} />
          </div>
        )}
      </dl>
    </div>
  );
};
