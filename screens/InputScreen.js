import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, TouchableOpacity, Keyboard } from "react-native";
import Constants from "../constants/Constants";
import Rectangular from "../components/Rectangular";
import Circle from "../components/Circle";
import GameText from "../components/GameText";
import BackScreenButton from "../components/BackScreenButton";
import Input from "../components/Input";
import FunctionButton from "../components/FunctionButton";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { useState } from "react";

const InputScreen = () => {
  const [secretNum, setSecretNum] = useState("");
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Constants.COLORS.PRIMARY,
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      width: Constants.SCREEN_WIDTH,
      height: Constants.SCREEN_HEIGHT,
      overflow: "hidden",
    },
  });

  const dismissInput = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={dismissInput}
      activeOpacity={1}
    >
      <StatusBar hidden={true} />
      <Rectangular
        width={Constants.SCREEN_WIDTH / 2}
        height={Constants.SCREEN_WIDTH / 4}
        color={"yellow"}
        top={Constants.SCREEN_HEIGHT / 8}
        left={Constants.SCREEN_WIDTH / 1.5}
      />
      <Rectangular
        width={Constants.SCREEN_WIDTH}
        height={Constants.SCREEN_WIDTH / 5}
        color={"red"}
        top={Constants.SCREEN_HEIGHT / 1.2}
        left={-Constants.SCREEN_WIDTH / 1.5}
      />
      <Circle
        width={Constants.SCREEN_WIDTH / 1.5}
        color={"blue"}
        top={Constants.SCREEN_WIDTH / 10}
        left={-Constants.SCREEN_WIDTH / 2}
      />
      <Circle
        width={Constants.SCREEN_WIDTH / 5}
        color={"green"}
        top={Constants.SCREEN_HEIGHT / 1.2}
        left={Constants.SCREEN_WIDTH / 1.3}
      />
      <BackScreenButton
        onPress={() => {
          navigation.navigate("HomeScreen");
        }}
      />

      <View
        style={{
          height: Constants.SCREEN_HEIGHT * 0.4,
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <GameText type={"heading"} textContent={"Enter a secret number"} />

        <Input
          onChangeText={(value) => {
            setSecretNum(value);
          }}
          keyboardType={"numeric"}
        />

        <GameText
          type={"hint"}
          textContent={"Hint: 0 or 99 can make your opponent struggle"}
        />
        <FunctionButton
          width={Constants.SCREEN_WIDTH / 2}
          height={Constants.SCREEN_WIDTH / 8}
          name={"Let's Start"}
          onPress={() => {
            navigation.navigate("GameScreen");
            dispatch({ type: "ADD_SECRET_NUM", payload: secretNum });
          }}
          color={"green"}
          func={secretNum !== "" && secretNum >= 0 && secretNum <= 99}
        />
      </View>
    </TouchableOpacity>
  );
};

export default InputScreen;
