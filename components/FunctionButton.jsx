import { StyleSheet, TouchableOpacity } from "react-native";
import Constants from "../constants/Constants";
import GameText from "./GameText";

const FunctionButton = ({ width, height, name, onPress, color, func }) => {

  let c;
  if (!func) {
    color = "inactive";
  }
  switch (color) {
    case "yellow":
      c = Constants.COLORS.DECREASE_BUTTON;
      break;
    case "red":
      c = Constants.COLORS.INCREASE_BUTTON;
      break;
    case "green":
      c = Constants.COLORS.START_BUTTON;
      break;
    default:
      c = Constants.COLORS.INACTIVE_BUTTON;
  }

  const styles = StyleSheet.create({
    button: {
      backgroundColor: c,
      borderRadius: 10,
      width: width,
      height: height,
      alignItems: "center",
      justifyContent: "center",
    },
  });

  return (
    <TouchableOpacity style={styles.button} onPress={onPress} disabled={!func}>
      <GameText type={"functionButton"} textContent={name} />
    </TouchableOpacity>
  );
}

export default FunctionButton;