import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const FoodSelectionCircle = ({ imageSource, buttonText }) => {
  return (
    <View className="flex-1 m-2">
      <View className="flex flex-col">
        <TouchableOpacity style={{ borderRadius: 9999, overflow: 'hidden' }}>
          <Image
            source={imageSource}
            className="w-24 h-24"
          />
        </TouchableOpacity>
        <Text className="text-center text-xs font-Inter font-normal mt-1">{buttonText}</Text>
      </View>
    </View>
  );
};

export default FoodSelectionCircle;
