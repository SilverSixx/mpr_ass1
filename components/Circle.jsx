import { StyleSheet, View } from "react-native";
import Constants from "../constants/Constants";

const Circle = ({top, left, width, color }) => {
  let c =
    color === "blue"
      ? Constants.COLORS.BLUE_CIRCLE
      : Constants.COLORS.GREEN_CIRCLE;

  const styles = StyleSheet.create({
    circle: {
      width: width,
      height: width,
      backgroundColor: c,
      borderRadius: width / 2,
      position: "absolute",
      top: top,
      left: left,
    },
  });

  return <View style={styles.circle} />;
};

export default Circle;
