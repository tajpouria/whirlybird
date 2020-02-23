import { createContext } from "react";

export const gameContextSharedValuesAndActions = {
  player: { rank: 0 },
};

export const gameContext = createContext(gameContextSharedValuesAndActions);
