type Colors = {
  primary: string;
  white: string;
  black: string;
  secondary: string;
  background: string;
  backgroundLight: string;
  text: string;
  textLight: string;
};

type Theme = "light" | "dark";

type ThemeColors = {
  [key in Theme]: Colors;
};

const themeColors: ThemeColors = {
  light: {
    primary: "#AFDDAE",
    white: "rgb(240, 240, 240)",
    black: "rgb(40, 40, 40)",
    secondary: "rgb(236, 72, 153)",
    background: "rgb(240, 240, 240)",
    backgroundLight: "rgb(250, 250, 250)",
    text: "rgb(40, 40, 40)",
    textLight: "rgb(100, 100, 100)",
  },
  dark: {
    primary: "#AFDDAE",
    white: "rgb(240, 240, 240)",
    black: "rgb(40, 40, 40)",
    secondary: "rgb(236, 72, 153)",
    background: "rgb(40, 40, 40)",
    backgroundLight: "rgb(50, 50, 50)",
    text: "rgb(240, 240, 240)",
    textLight: "rgb(200, 200, 200)",
  },
};

export default themeColors;
