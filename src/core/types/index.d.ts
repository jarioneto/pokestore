import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: {
        main: string;
        light: string;
        dark: string;
        contrast: string;
      };
      secondary: {
        main: string;
        light: string;
        dark: string;
        contrast: string;
      };
    };
  }
}
