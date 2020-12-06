import { createPlayer, createDummyPlayers } from "../utils";

const setup = {
  numberOfPlayers: 5,
  predefinedCards: [1, 2, 3, 5, 8, 13, 21]
};

const appPlayers = createDummyPlayers({
  amount: setup.numberOfPlayers,
  createPlayer
});

export const defaultContext = {
  config: {
    players: appPlayers,
    player: appPlayers[2],
    definedCards: setup.predefinedCards
  }
};
