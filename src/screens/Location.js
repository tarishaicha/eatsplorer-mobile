import * as React from "react";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import Background from "../components/Background";

export default function Location({ navigation }) {
  return (
    <Background>
      <Text
        className="text font-bold"
      >
        Location
      </Text>
      <StatusBar style="auto" />
    </Background>
  );
}
