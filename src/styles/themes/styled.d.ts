import "styled-components";

interface IText {
  [key: string]: string;
  default: string;
  contrast: string;
  smooth: string;
  ioasysPrimary: string;
  ioasysSecondary: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      [key: string]: string | IText;

      primary: string;
      secondary: string;

      background: string;

      text: IText;
    };
  }
}
