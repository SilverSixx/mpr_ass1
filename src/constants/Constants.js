import { Dimensions, Platform } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const COLORS = {
  // main background color
  PRIMARY: "#FAFAFA",
  // text in view background color
  SECONDARY: "#CACACA",

  YELLOW_RECTANGULAR: "#FBBC05",
  RED_RECTANGULAR: "#EB4335",
  GREEN_CIRCLE: "#007B36",
  BLUE_CIRCLE: "#009BD6",

  INACTIVE_BUTTON: "#5E5E5E",
  START_BUTTON: "#007B36",
  INCREASE_BUTTON: "#EB4335",
  DECREASE_BUTTON: "#FFC700",

  WHITE: "#FFFFFF",
  BLACK: "#000000",
};

const FONTS = {
  FAMILY: Platform.OS === "android" ? "Roboto" : "Verdana",
  HINT_TEXT: { size: SCREEN_WIDTH / 30, weight: "normal" },
  BUTTON_TEXT: { size: SCREEN_WIDTH / 24, weight: "bold" },
  CONTENT_TEXT: { size: SCREEN_WIDTH / 26, weight: "normal" },
  HEADING_TEXT: { size: SCREEN_WIDTH / 15, weight: "bold" },
  GAME_NAME_TEXT: { size: SCREEN_WIDTH / 10, weight: "bold" },
};

const TEXT_COLORS = {
  BUTTON_TEXT_WHITE: "#FFFFFF",
  BUTTON_TEXT_BLACK: "#000000",
  CONTENT_TEXT: "#5E5E5E",
  GAME_TEXT: "#000000",
  WIN_TEXT: "#EB4335",

  CONTENT_RED_TEXT: "#EB4335",
  CONTENT_YELLOW_TEXT: "#FF9900",
  CONTENT_GREEN_TEXT: "#33FF00",
};

const SPACING = {
  SMALL: SCREEN_WIDTH / 45,
  MEDIUM: SCREEN_WIDTH / 25,
  LARGE: SCREEN_WIDTH / 15,
};

export default {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  COLORS,
  FONTS,
  TEXT_COLORS,
  SPACING,
};
