import { StyleSheet, Text, View } from "react-native";
import Constants from "../constants/Constants";

// game name, heading, content, hint, button text
const GameText = ({ type, textContent }) => {
  const typeMap = {
    gameName: {
      size: Constants.FONTS.GAME_NAME_TEXT.size,
      weight: Constants.FONTS.GAME_NAME_TEXT.weight,
      color: Constants.TEXT_COLORS.GAME_TEXT,
    },
    heading: {
      size: Constants.FONTS.HEADING_TEXT.size,
      weight: Constants.FONTS.HEADING_TEXT.weight,
      color: Constants.TEXT_COLORS.CONTENT_TEXT,
    },
    content: {
      size: Constants.FONTS.CONTENT_TEXT.size,
      weight: Constants.FONTS.CONTENT_TEXT.weight,
      color: Constants.TEXT_COLORS.CONTENT_TEXT,
    },
    hint: {
      size: Constants.FONTS.HINT_TEXT.size,
      weight: Constants.FONTS.HINT_TEXT.weight,
      color: Constants.TEXT_COLORS.CONTENT_TEXT,
    },
    screenButton: {
      size: Constants.FONTS.BUTTON_TEXT.size,
      weight: Constants.FONTS.BUTTON_TEXT.weight,
      color: Constants.TEXT_COLORS.BUTTON_TEXT_BLACK,
    },
    functionButton: {
      size: Constants.FONTS.BUTTON_TEXT.size,
      weight: Constants.FONTS.BUTTON_TEXT.weight,
      color: Constants.TEXT_COLORS.BUTTON_TEXT_WHITE,
    },
    winText: {
      size: Constants.FONTS.GAME_NAME_TEXT.size,
      weight: Constants.FONTS.GAME_NAME_TEXT.weight,
      color: Constants.COLORS.WHITE,
      textAlign: "center",
    },
    winDetails: {
      size: Constants.FONTS.HEADING_TEXT.size,
      weight: Constants.FONTS.GAME_NAME_TEXT.weight,
      color: Constants.COLORS.WHITE,
      textAlign: "center",
    },
  };

  let size = typeMap[type].size;
  let weight = typeMap[type].weight;
  let color = typeMap[type].color;
  let textAlign = typeMap[type].textAlign;

  const styles = StyleSheet.create({
    gameText: {
      fontFamily: Constants.FONTS.FAMILY,
      fontSize: size,
      fontWeight: weight,
      color: color,
      textAlign: textAlign,
    },
  });

  return <Text style={styles.gameText}>{textContent}</Text>;
};

export default GameText;
