import { StyleSheet, Text } from "react-native";
import Constants from "../constants/Constants";

const NestedText = ({ text, color }) => {
  let c;
  switch (color) {
    case "red":
      c = Constants.TEXT_COLORS.CONTENT_RED_TEXT;
      break;
    case "yellow":
      c = Constants.TEXT_COLORS.CONTENT_YELLOW_TEXT;
      break;
    case "green":
      c = Constants.TEXT_COLORS.CONTENT_GREEN_TEXT;
      break;
    default:
      c = Constants.TEXT_COLORS.CONTENT_TEXT;
  }

  const styles = StyleSheet.create({
    text: {
      fontWeight: Constants.FONTS.BUTTON_TEXT.weight,
      fontSize: Constants.FONTS.CONTENT_TEXT.size,
      color: c,
    },
  });
  return <Text style={styles.text}>{text}</Text>;
};

export default NestedText;