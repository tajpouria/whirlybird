import * as React from "react";
import { Stage, Sprite, Container } from "@inlet/react-pixi";

export const Hello = () => {
  return (
    <Stage width={300} height={300} options={{ backgroundColor: 0xeeeeee }}>
      <Container x={150} y={150}>
        <div>good</div>
      </Container>
    </Stage>
  );
};
