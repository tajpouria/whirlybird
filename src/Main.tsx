import * as React from "react";

import { App } from "./App";
import { GameContextProvider } from "./context/game";

export interface IMainProps {
  app: App;
}

export class Main extends React.Component<IMainProps, {}> {
  public render(): JSX.Element {
    return <GameContextProvider></GameContextProvider>;
  }
}
