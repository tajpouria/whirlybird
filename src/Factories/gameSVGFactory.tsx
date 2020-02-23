import * as React from "react";

import { SVGFactory, SVGProps } from "../utils/jsx";

enum WhirlyBirdGameSVGTypes {
  androidBean = "androidBean",
  blanket = "blanket",
}

const whirlyBirdGameSVGFactory = new SVGFactory([
  [
    WhirlyBirdGameSVGTypes.androidBean,
    () => (
      <path d="M4 12c0 2.76 2.24 5 5 5s5-2.24 5-5V9H4v3zm7.95-8.91l1.5-1.5-.59-.59-1.65 1.65c-.67-.34-1.41-.54-2.21-.54s-1.54.2-2.21.54L5.14 1l-.58.59 1.5 1.5C4.81 4 4 5.45 4 7.11V8h10v-.89c0-1.66-.81-3.11-2.05-4.02zM7 6H6V5h1v1zm5 0h-1V5h1v1z" />
    ),
  ],
  [WhirlyBirdGameSVGTypes.blanket, () => <path d="M19 13H5v-2h14v2z" />],
]);

export const whirlyBirdGameSVGs = (() => {
  const res: Record<string, React.FC<SVGProps>> = Object.create(
    WhirlyBirdGameSVGTypes,
  );

  Object.keys(WhirlyBirdGameSVGTypes).forEach(
    svg =>
      (res[svg] = whirlyBirdGameSVGFactory.getSVG(
        svg as WhirlyBirdGameSVGTypes,
      ) as React.FC),
  );

  return res as Record<WhirlyBirdGameSVGTypes, React.FC<SVGProps>>;
})();
