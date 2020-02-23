import * as React from "react";
import { useLocalStore } from "mobx-react";

import { gameContext, gameContextSharedValuesAndActions } from "./gameContext";

export const GameContextProvider = (({ children }) => {
  const gameStore = useLocalStore(() => gameContextSharedValuesAndActions);

  return (
    <gameContext.Provider value={gameStore}>{children}</gameContext.Provider>
  );
}) as React.FC;
