import * as React from "react";

export interface SVGProps {
  width?: number;
  height?: number;
  viewBox?: [number, number, number, number];
}

type SVGNameAndPathTuple<T> = [T, React.FC];

export class SVGFactory<T> {
  public svgMap = new Map<T, React.FC<SVGProps>>();

  /**
   * Create a svg factory wrapping all svgs then retrieve it using pre-defined names
   *
   * @param svgsNameAndPathTupleList Array of [svgname, () => <svgpath/>] tuple
   * @param factoryDefaultSVGProps Specify default width, height and viewBox of each factory whenever mentioned props no specified explicitly
   */
  constructor(
    svgsNameAndPathTupleList: SVGNameAndPathTuple<T>[],
    private factoryDefaultSVGProps: SVGProps = {
      width: 18,
      height: 18,
      viewBox: [0, 0, 18, 18],
    },
  ) {
    this._viewBoxTupleToString();
    this._addAllSVGs(svgsNameAndPathTupleList);
  }

  private _addAllSVGs = (
    svgsNameAndPathTupleList: SVGNameAndPathTuple<T>[],
  ) => {
    const { svgMap, factoryDefaultSVGProps } = this;

    svgsNameAndPathTupleList.forEach(([svgName, SVGPath]) => {
      svgMap.set(svgName, props => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={props?.width?.toString() || factoryDefaultSVGProps.width}
          height={props?.height?.toString() || factoryDefaultSVGProps.height}
          viewBox={
            ((props?.viewBox ||
              factoryDefaultSVGProps.viewBox) as unknown) as string
          }
        >
          <SVGPath />
        </svg>
      ));
    });
  };

  /**
   * Retrieve svg base upon of specified name
   *
   * @param svgName The name of svg
   */
  getSVG = (svgName: T) => this.svgMap.get(svgName);

  private _viewBoxTupleToString = () => {
    const { factoryDefaultSVGProps } = this;

    this.factoryDefaultSVGProps = {
      ...factoryDefaultSVGProps,
      // @ts-ignore
      viewBox: factoryDefaultSVGProps.viewBox.join(" "),
    };
  };
}
