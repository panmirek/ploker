export const createDummyPlayers = ({ amount, createPlayer }) => {
  let players = [];
  for (let i = 0; i < amount; i += 1) {
    players.push(createPlayer({ index: i + 1 }));
  }
  return players;
};
