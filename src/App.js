import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { AppContext, defaultContext } from "./context";
import { routes } from "./routing";

import "./styles.scss";

const Navigation = () => {
  return (
    <nav>
      <ul>
        {[...routes]
          .sort((a, b) => a.order - b.order)
          .map((route) => (
            <li key={route.path}>
              <Link to={route.path}>{route.name}</Link>
            </li>
          ))}
      </ul>
    </nav>
  );
};

const App = () => {
  const { config } = defaultContext;

  const { definedCards } = config;

  const [players, setPlayers] = useState(config.players);
  const [player, setPlayer] = useState(config.player);
  const [playerCard, setPlayerCard] = useState(config.player.card);
  const [playerStatus, setPlayerStatus] = useState(config.player.status);

  useEffect(() => {
    setPlayer((prevState) => ({
      ...prevState,
      card: playerCard,
      status: playerStatus
    }));
  }, [playerCard, playerStatus]);

  useEffect(() => {
    setPlayers((prevState) =>
      prevState.map((prevPlayer) =>
        prevPlayer.index === player.index ? player : prevPlayer
      )
    );
  }, [player]);

  const value = {
    player,
    players,
    playerCard,
    setPlayerCard,
    playerStatus,
    setPlayerStatus,
    definedCards
  };

  return (
    <Router>
      <AppContext.Provider value={value}>
        <div className="App">
          <Navigation />
          <h1>Planning poker</h1>

          <Switch>
            {routes.map((route) => {
              const { view: View, path } = route;
              return (
                <Route key={path} path={path}>
                  <View />
                </Route>
              );
            })}
          </Switch>
        </div>
      </AppContext.Provider>
    </Router>
  );
};

export default App;
