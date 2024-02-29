import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, SafeAreaView, Text } from "react-native";
import Constants from "../constants/Constants";
import Rectangular from "../components/Rectangular";
import Circle from "../components/Circle";
import GameText from "../components/GameText";
import BackScreenButton from "../components/BackScreenButton";
import NestedText from "../components/NestedText";
import { useNavigation } from "@react-navigation/native";

const HowToScreen = () => {

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
    text: {
      fontFamily: Constants.FONTS.FAMILY,
      fontSize: Constants.FONTS.BUTTON_TEXT.size,
      color: Constants.TEXT_COLORS.CONTENT_TEXT,
      textAlign: "justify",
    },
  });
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <Rectangular
        width={Constants.SCREEN_WIDTH / 2}
        height={Constants.SCREEN_WIDTH / 4}
        color={"yellow"}
        top={Constants.SCREEN_HEIGHT / 1.4}
        left={-Constants.SCREEN_WIDTH / 3}
      />
      <Rectangular
        width={Constants.SCREEN_WIDTH}
        height={Constants.SCREEN_WIDTH / 5}
        color={"red"}
        top={-Constants.SCREEN_HEIGHT / 15}
        left={Constants.SCREEN_WIDTH / 1.3}
      />
      <Circle
        width={Constants.SCREEN_WIDTH / 1.5}
        color={"blue"}
        top={Constants.SCREEN_HEIGHT / 1.2}
        left={Constants.SCREEN_WIDTH / 1.3}
      />
      <Circle
        width={Constants.SCREEN_WIDTH / 5}
        color={"green"}
        top={Constants.SCREEN_HEIGHT / 5}
        left={-Constants.SCREEN_WIDTH / 10}
      />
      <BackScreenButton
        onPress={() => {
          navigation.navigate("HomeScreen");
        }}
      />

      <View
        style={{
          padding: Constants.SPACING.LARGE,
          marginTop: Constants.SPACING.LARGE,
        }}
      >
        <GameText type="heading" textContent="How to Play ?" />
      </View>

      <View
        style={{ width: Constants.SCREEN_WIDTH - Constants.SPACING.LARGE * 2 }}
      >
        <Text style={styles.text}>
          In this game, you start by seeing a random number (
          <NestedText text="49" />) and 3 buttons:{" "}
          <NestedText text="+" color="red" />,{" "}
          <NestedText text="-" color="yellow" />, and{" "}
          <NestedText text="Bingo" color="green" />.
        </Text>
        <View style={{ height: Constants.SPACING.MEDIUM }} />
        <Text style={styles.text}>
          You can either add or subtract the displayed number using{" "}
          <NestedText text="+" color="red" />, and{" "}
          <NestedText text="-" color="yellow" /> buttons. If the result is
          greater than <NestedText text="49" />, the{" "}
          <NestedText text="+" color="red" /> button is disabled. If the result
          is less than <NestedText text="49" />, the{" "}
          <NestedText text="-" color="yellow" /> button is disabled.
        </Text>
        <View style={{ height: Constants.SPACING.MEDIUM }} />
        <Text style={styles.text}>
          So, let's say you start with <NestedText text="75" /> and obviously
          the
          <NestedText text="+" color="red" /> button is disabled because{" "}
          <NestedText text="75 < 49" />. You press the{" "}
          <NestedText text="-" color="yellow" /> button, getting{" "}
          <NestedText text="22" />. Now, the{" "}
          <NestedText text="-" color="yellow" /> button is disabled because{" "}
          <NestedText text="22" /> is less than <NestedText text="49" />. Then
          you press the <NestedText text="+" color="red" /> button, getting{" "}
          <NestedText text="39" />. Again, the{" "}
          <NestedText text="-" color="yellow" /> button is disabled because{" "}
          <NestedText text="39" /> is still less than <NestedText text="49" />.
          You keep pressing <NestedText text="+" color="red" /> until the Bingo
          button becomes active. Each time you press{" "}
          <NestedText text="+" color="red" /> or{" "}
          <NestedText text="-" color="yellow" /> you are trying to get closer to
          the secret number.
        </Text>
        <View style={{ height: Constants.SPACING.MEDIUM }} />
        <Text style={styles.text}>
          The game is won when the <NestedText text="Bingo" color="green" />{" "}
          button becomes active, and you can see{" "}
          <NestedText text="How many guesses" /> it took to reach the secret
          number.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default HowToScreen;
