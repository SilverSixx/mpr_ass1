import { StyleSheet, TextInput } from "react-native";
import Constants from "../constants/Constants";

const Input = ({ value, onChangeText, keyboardType }) => {
  const styles = StyleSheet.create({
    input: {
      width: Constants.SCREEN_WIDTH * 0.8,
      backgroundColor: Constants.COLORS.WHITE,
      borderRadius: 10,
      textAlign: "center",
      padding: Constants.SPACING.MEDIUM,
      fontSize: Constants.FONTS.HEADING_TEXT.size,
      fontWeight: Constants.FONTS.BUTTON_TEXT.weight,
      fontFamily: Constants.FONTS.FAMILY,
      color: Constants.TEXT_COLORS.CONTENT_TEXT,
      shadowColor: Constants.COLORS.BLACK,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      shadowRadius: 1,
    },
  });
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
    />
  );
};

export default Input;
