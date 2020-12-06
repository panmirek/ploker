import React from "react";

import { GameView } from "./views";

export const routes = [
  { path: "/game", name: "game", view: GameView, order: 3 },
  {
    path: "/settings",
    name: "settings",
    view: () => <p>settings here…</p>,
    order: 2
  },
  { path: "/", name: "start", view: () => <p>intro</p>, order: 1 }
];
