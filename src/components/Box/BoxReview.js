import React from "react";
import { View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const BoxReview = ({ imageSource, name, cust_rating, cust_review}) => {
  return (
    <View className="mt-4 ml-4 rounded-xl shadow-xl p-3 h-44 w-[335px]  bg-white">
    <View className="flex-row mx-3 items-center ">
      <View className="rounded-full overflow-hidden">
        <Image
          source={imageSource}
          className="h-14 w-14"
        />
      </View>
      <Text className="text-center text-s font-inter font-semibold mt-1 mx-4">
        {name}
      </Text>
      <View className="flex flex-row mt-1 ">
        <Entypo
          name="star"
          size={17}
          color="#FDC83D"
        />
        <Text className="text-xs mx-1 text-center font-bold text-[#9CA3AF]">
          {cust_rating}
        </Text>
      </View>
    </View>
    <View className="mx-2 mt-2 items-center">
      <Text className="text-justify text-xs font-Inter font-normal mt-1">
       {cust_review}
      </Text>
    </View>
  </View>
  
  );
};

export default BoxReview;
