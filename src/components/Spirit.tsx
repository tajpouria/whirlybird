import * as React from "react";
import { Sprite as PIXISprite } from "@inlet/react-pixi";

import { SVGProps } from "../utils/jsx";
import { whirlyBirdGameSVGs } from "../Factories/gameSVGFactory";

interface Motion {
  x?: number;
  y?: number;
  rotation?: number;
  anchor?: number;
}

export const INITIAL_NON_SET_MOTION = { x: 0, y: 0, rotation: 0, anchor: 0 };

export abstract class Sprite<T> extends React.Component<T> {
  abstract title: string;
  protected abstract svg: React.FC<SVGProps>;
  abstract state: { _motion: Motion };

  constructor(props: T) {
    super(props);
  }

  render() {
    const { svg } = this;
    const { _motion } = this.state;
    // @ts-ignore
    return <PIXISprite {..._motion} image={svg} />;
  }

  public static create(props: SpriteProps) {
    return <CharacterSprite {...props} />;
  }
}

class CharacterSprite extends Sprite<SpriteProps> {
  componentWillReceiveProps(nextProps: { motion: Motion }) {
    if (
      JSON.stringify(nextProps.motion) !== JSON.stringify(this.state._motion)
    ) {
      this.setState({
        _motion: (pv: Motion) => ({ ...pv, ...nextProps.motion }),
      });
    }
  }

  state: { _motion: Motion } = {
    _motion: this.props.motion
      ? { ...INITIAL_NON_SET_MOTION, ...this.props.motion }
      : Object.create(INITIAL_NON_SET_MOTION),
  };

  title = this.props.title || "None";

  protected svg = this.props.svg || whirlyBirdGameSVGs.helpOutline;
}

export interface SpriteProps {
  title: string;
  svg: React.FC<SVGProps>;
  motion: Motion;
}
