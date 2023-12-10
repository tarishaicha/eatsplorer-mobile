import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";

export default function LoginBackground({ children }) {
  return (
    <SafeAreaView className=" flex-1 bg-[#FEDB71] ">
      <View className="my-5">
        {children}
      </View>
    </SafeAreaView>
  );
}
