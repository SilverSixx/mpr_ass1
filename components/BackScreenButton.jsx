import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Constants from "../constants/Constants";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

const BackScreenButton = ({ onPress }) => {
  const styles = StyleSheet.create({
    button: {
      position: "absolute",
      top: Constants.SPACING.LARGE,
      left: Constants.SPACING.LARGE,
      backgroundColor: Constants.COLORS.WHITE,
      padding: Constants.SPACING.SMALL,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
      shadowColor: Constants.COLORS.BLACK,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
    },
  });

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Icon name="arrow-back" size={Constants.SPACING.MEDIUM} color={Constants.COLORS.BLACK} />
    </TouchableOpacity>
  );
};

export default BackScreenButton;
