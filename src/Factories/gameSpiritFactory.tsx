import * as React from "react";

import { Sprite, SpriteProps } from "../components";
import { whirlyBirdGameSVGs } from "./gameSVGFactory";

class SpritFactory<T> {
  public spiritsMap = new Map<T, JSX.Element>();

  constructor(private spirits: SpriteProps[]) {
    this.addAll();
  }

  private addAll() {
    this.spirits.forEach(spirit =>
      this.spiritsMap.set(
        (spirit.title as unknown) as T,
        Sprite.create(spirit),
      ),
    );
  }

  public getSpirit(spiritTitle: T) {
    return this.spiritsMap.get(spiritTitle);
  }
}

enum WhirlyBirdGameSpiritTypes {
  androidBean = "androidBean",
  blanket = "blanket",
}

export const WhirlyBirdGameSpiritFactory = (() => {
  const whirlyBirdGameSpiritFactory = new SpritFactory([
    {
      title: WhirlyBirdGameSpiritTypes.androidBean,
      svg: whirlyBirdGameSVGs.androidBean,
    },
    {
      title: WhirlyBirdGameSpiritTypes.blanket,
      svg: whirlyBirdGameSVGs.blanket,
    },
  ]);

  const res: Record<string, Sprite<SpriteProps>> = Object.create(
    WhirlyBirdGameSpiritTypes,
  );

  Object.keys(WhirlyBirdGameSpiritTypes).forEach(
    sprite =>
      ((res[sprite] as unknown) = whirlyBirdGameSpiritFactory.getSpirit(
        sprite,
      )),
  );

  return res as Record<WhirlyBirdGameSpiritTypes, Sprite<SpriteProps>>;
})();
