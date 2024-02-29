import { StyleSheet, View, Text } from "react-native";
import Constants from "../constants/Constants";
import GameText from "./GameText";

const Guess = ({ index, min, max }) => {
  const styles = StyleSheet.create({
    container: {
      borderColor: Constants.COLORS.BLACK,
      borderWidth: 1,
      borderRadius: 10,
      padding: Constants.SPACING.MEDIUM,
      margin: Constants.SPACING.SMALL,
      backgroundColor: Constants.COLORS.WHITE,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: Constants.SCREEN_WIDTH / 1.5,
    },
  });

  return (
    <View style={styles.container}>
      <GameText type={"content"} textContent={`#${index}`} />
      <GameText type={"content"} textContent={`${min} - ${max}`} />
    </View>
  );
};

export default Guess;
