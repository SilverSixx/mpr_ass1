import { StyleSheet, View } from "react-native";
import Constants from "../constants/Constants";

const Rectangular = ({ width, height, color, top, left }) => {
  let c =
    color === "red"
      ? Constants.COLORS.RED_RECTANGULAR
      : Constants.COLORS.YELLOW_RECTANGULAR;
  let d = color === "red" ? "-30deg" : "30deg";

  const styles = StyleSheet.create({
    rectangular: {
      width: width,
      height: height,
      backgroundColor: c,
      borderRadius: 10,
      transform: [{ rotate: d }],
      position: "absolute",
      top: top,
      left: left,
    },
  });

  return <View style={styles.rectangular} />;
};

export default Rectangular;
