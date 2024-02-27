import { StyleSheet, TouchableOpacity } from "react-native";
import Constants from "../constants/Constants";
import GameText from "./GameText";

const ScreenButton = ({ name, changeScreen }) => {
  const styles = StyleSheet.create({
    button: {
      backgroundColor: Constants.COLORS.WHITE,
      borderRadius: 10,
      padding: Constants.SPACING.MEDIUM,
      width: Constants.SCREEN_WIDTH / 2,
      alignItems: "center",
      shadowColor: Constants.COLORS.BLACK,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
    },
  });

  return (
    <TouchableOpacity style={styles.button} onPress={changeScreen}>
      <GameText type={"screenButton"} textContent={name} />
    </TouchableOpacity>
  );
};

export default ScreenButton;
