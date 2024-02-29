import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, SafeAreaView } from "react-native";
import Constants from "../constants/Constants";
import Rectangular from "../components/Rectangular";
import Circle from "../components/Circle";
import GameText from "../components/GameText";
import ScreenButton from "../components/ScreenButton";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Constants.COLORS.PRIMARY,
      alignItems: "center",
      position: "absolute",
      width: Constants.SCREEN_WIDTH,
      height: Constants.SCREEN_HEIGHT,
      overflow: "hidden",
    },
    nameContainer: {
      height: Constants.SCREEN_HEIGHT * 0.3,
      alignItems: "center",
      justifyContent: "center",
      zIndex: 10,
    },
    buttonContainer: {
      height: Constants.SCREEN_HEIGHT * 0.6,
      justifyContent: "center",
    },
    space: {
      height: Constants.SPACING.MEDIUM,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <Rectangular
        width={Constants.SCREEN_WIDTH / 2}
        height={Constants.SCREEN_WIDTH / 4}
        color={"yellow"}
        top={Constants.SCREEN_HEIGHT / 3.5}
        left={-Constants.SCREEN_WIDTH / 4}
      />
      <Rectangular
        width={Constants.SCREEN_WIDTH}
        height={Constants.SCREEN_WIDTH / 5}
        color={"red"}
        top={Constants.SCREEN_WIDTH / 10}
        left={Constants.SCREEN_WIDTH / 2}
      />
      <Circle
        width={Constants.SCREEN_WIDTH / 1.5}
        color={"blue"}
        top={Constants.SCREEN_HEIGHT / 1.5}
        left={Constants.SCREEN_WIDTH / 2}
      />
      <Circle
        width={Constants.SCREEN_WIDTH / 5}
        color={"green"}
        top={Constants.SCREEN_HEIGHT / 1.3}
        left={Constants.SCREEN_WIDTH / 7}
      />
      <View style={styles.nameContainer}>
        <GameText type={"gameName"} textContent={"Numbering"} />
        <GameText type={"hint"} textContent={"What's your number ?"} />
      </View>
      <View style={styles.buttonContainer}>
        <ScreenButton
          name={"Play"}
          changeScreen={() => {
            navigation.navigate("InputScreen");
          }}
        />
        <View style={styles.space} />
        <ScreenButton
          name={"How to Play"}
          changeScreen={() => {
            navigation.navigate("HowToScreen");
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
