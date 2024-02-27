import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Constants from "../constants/Constants";
import { useState, useEffect } from "react";
import Rectangular from "../components/Rectangular";
import Circle from "../components/Circle";
import GameText from "../components/GameText";
import BackScreenButton from "../components/BackScreenButton";
import FunctionButton from "../components/FunctionButton";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import Guess from "../components/Guess";
import ScreenButton from "../components/ScreenButton";

const GameScreen = () => {
  const navigation = useNavigation();
  const secretNum = Number(useSelector((state) => state.data.secretNum));

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(99);
  const [guesses, setGuesses] = useState([]); // [min, max]
  const [randomNum, setRandomNum] = useState(() => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  });

  const [canIncrease, setCanIncrease] = useState();
  const [canDecrease, setCanDecrease] = useState();
  const [canWin, setCanWin] = useState();
  const [isToastVisible, setIsToastVisible] = useState(false);

  useEffect(() => {
    const updateGameState = () => {
      setCanIncrease(randomNum < secretNum);
      setCanDecrease(randomNum > secretNum);
      setCanWin(randomNum === secretNum);
    };
    updateGameState();
  }, [randomNum, min, max]);

  const increaseNumber = () => {
    setMin(randomNum);
    setRandomNum(
      () => Math.floor(Math.random() * (max - randomNum + 1)) + randomNum
    );
    setGuesses([
      ...guesses,
      {
        min: randomNum,
        max: max,
      },
    ]);
  };

  const decreaseNumber = () => {
    setMax(randomNum);
    setRandomNum(() => Math.floor(Math.random() * (randomNum - min + 1)) + min);
    setGuesses([
      ...guesses,
      {
        min: min,
        max: randomNum,
      },
    ]);
  };

  const showToast = () => {
    setIsToastVisible(true);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Constants.COLORS.PRIMARY,
      alignItems: "center",
      width: Constants.SCREEN_WIDTH,
      height: Constants.SCREEN_HEIGHT,
      overflow: "hidden",
    },
    topContainer: {
      alignItems: "center",
      height: Constants.SCREEN_HEIGHT / 2,
      justifyContent: "flex-end",
      paddingBottom: Constants.SPACING.LARGE,
    },
    botContainer: {
      alignItems: "center",
    },
    spacing: {
      marginBottom: Constants.SPACING.MEDIUM,
    },
    toastContainer: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      alignItems: "center",
      height: Constants.SCREEN_HEIGHT,
      justifyContent: "center",
    },
    buttonContainer: {
      flexDirection: "column",
      justifyContent: "space-around",
      height: Constants.SCREEN_HEIGHT / 6,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <Rectangular
        width={Constants.SCREEN_WIDTH / 2}
        height={Constants.SCREEN_WIDTH / 4}
        color={"yellow"}
        top={Constants.SCREEN_HEIGHT / 1.5}
        left={Constants.SCREEN_WIDTH / 1.5}
      />
      <Rectangular
        width={Constants.SCREEN_WIDTH}
        height={Constants.SCREEN_WIDTH / 5}
        color={"red"}
        top={Constants.SCREEN_WIDTH / 3}
        left={-Constants.SCREEN_WIDTH / 1.2}
      />
      <Circle
        width={Constants.SCREEN_WIDTH / 1.5}
        color={"blue"}
        top={Constants.SCREEN_HEIGHT / 1.5}
        left={-Constants.SCREEN_WIDTH / 2}
      />
      <Circle
        width={Constants.SCREEN_WIDTH / 5}
        color={"green"}
        top={Constants.SCREEN_WIDTH / 6}
        left={Constants.SCREEN_WIDTH / 1.2}
      />
      <BackScreenButton
        onPress={() => {
          navigation.navigate("HomeScreen");
        }}
      />
      <View style={styles.topContainer}>
        <GameText type={"gameName"} textContent={randomNum} />
        <View
          style={{
            width: Constants.SCREEN_WIDTH / 2,
            height: Constants.SCREEN_HEIGHT / 6,
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <FunctionButton
            width={Constants.SCREEN_WIDTH / 6}
            height={Constants.SCREEN_WIDTH / 6}
            name={"+"}
            onPress={increaseNumber}
            color={"red"}
            func={canIncrease}
          />
          <FunctionButton
            width={Constants.SCREEN_WIDTH / 6}
            height={Constants.SCREEN_WIDTH / 6}
            name={"-"}
            onPress={decreaseNumber}
            color={"yellow"}
            func={canDecrease}
          />
        </View>

        <FunctionButton
          width={Constants.SCREEN_WIDTH / 2}
          height={Constants.SCREEN_WIDTH / 6}
          name={"Bingo"}
          onPress={showToast}
          color={"green"}
          func={canWin}
        />
      </View>
      <View style={styles.botContainer}>
        <GameText type={"heading"} textContent={"Previous guesses"} />
        <View style={styles.spacing} />
        {guesses.length === 0 ? (
          <GameText type={"content"} textContent={"No guesses yet"} />
        ) : (
          <ScrollView>
            {guesses
              .sort((a, b) => b.max - a.max)
              .reverse()
              .map((guess, index) => (
                <Guess key={index} min={guess.min} max={guess.max}></Guess>
              ))}
          </ScrollView>
        )}
      </View>
      {isToastVisible && (
        <View style={styles.toastContainer}>
          <GameText
            type={"winText"}
            textContent={`${secretNum} is the secret number.`}
          />
          <GameText
            type={"winDetails"}
            textContent={`You took ${guesses.length + 1} guesses to find it.`}
          />
          <View style={styles.buttonContainer}>
            <ScreenButton
              name={"Play Again"}
              changeScreen={() => {
                navigation.navigate("InputScreen");
              }}
            />
            <ScreenButton
              name={"Home"}
              changeScreen={() => {
                navigation.navigate("HomeScreen");
              }}
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default GameScreen;
