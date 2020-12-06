import { PlayerStatus, PlayerDefaultName } from "./enums";

const startingSetup = {
  card: { number: undefined },
  status: PlayerStatus.betting
};

export const createPlayer = ({
  name = PlayerDefaultName,
  card = startingSetup.card,
  status = startingSetup.status,
  index
}) => {
  const player = {
    index,
    name: name === PlayerDefaultName ? `${name} ${index}` : name,
    card,
    status
  };
  return player;
};

export const resetPlayerData = ({ setPlayerCard, setPlayerStatus }) => {
  setPlayerCard(startingSetup.card);
  setPlayerStatus(startingSetup.status);
};
