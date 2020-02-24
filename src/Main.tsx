import * as React from "react";

import { App } from "./App";
import { GameContextProvider } from "./context/game";
import { WhirlyBirdGameSpiritFactory } from "./Factories";

export interface IMainProps {
  app: App;
}

export class Main extends React.Component<IMainProps, {}> {
  public render(): JSX.Element {
    console.log(WhirlyBirdGameSpiritFactory);
    return (
      <GameContextProvider>
        <WhirlyBirdGameSpiritFactory.androidBean />
      </GameContextProvider>
    );
  }
}
