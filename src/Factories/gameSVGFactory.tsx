import * as React from "react";

import { SVGFactory, SVGProps } from "../utils/jsx";

enum WhirlyBirdGameSVGTypes {
  androidBean = "androidBean",
  blanket = "blanket",
  helpOutline = "helpOutline",
}

export const whirlyBirdGameSVGs = (() => {
  const whirlyBirdGameSVGFactory = new SVGFactory([
    [
      WhirlyBirdGameSVGTypes.androidBean,
      () => (
        <path d="M4 12c0 2.76 2.24 5 5 5s5-2.24 5-5V9H4v3zm7.95-8.91l1.5-1.5-.59-.59-1.65 1.65c-.67-.34-1.41-.54-2.21-.54s-1.54.2-2.21.54L5.14 1l-.58.59 1.5 1.5C4.81 4 4 5.45 4 7.11V8h10v-.89c0-1.66-.81-3.11-2.05-4.02zM7 6H6V5h1v1zm5 0h-1V5h1v1z" />
      ),
    ],
    [WhirlyBirdGameSVGTypes.blanket, () => <path d="M19 13H5v-2h14v2z" />],
    [
      WhirlyBirdGameSVGTypes.helpOutline,
      () => (
        <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" />
      ),
    ],
  ]);

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
