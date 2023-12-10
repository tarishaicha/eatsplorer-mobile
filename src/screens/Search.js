import * as React from "react";
import { View, Text, TouchableOpacity, TextInput,ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from '@expo/vector-icons';
import Background from "../components/Background";
import { Feather } from '@expo/vector-icons';

import SearchBox from "../components/Box/SearchBox";

export default function Search({ navigation }) {
  return (
    <Background>
      <View className="flex flex-row m-1 w-full">
        <TouchableOpacity className="content-start mt-1" onPress={() => navigation.navigate("main")}>
          <Ionicons name="arrow-back" size={25} color="black" />
        </TouchableOpacity>
        <Text className="text-black text-center font-inter text-lg font-semibold mx-4 ">Search</Text>
      </View>
      <ScrollView>
      <TouchableOpacity className = "flex-row items-center justify-center p-3 rounded-lg  m-6 bg-white border border-[#8b91a3]">
        <Ionicons name="search-outline" size={22} color="black" />
        <TextInput
          className = "flex-1 ml-2 text-[#8b91a3] text-xs font-light"
          placeholder="Cari restoran atau menu makanan"
          placeholderTextColor="#8b91a3"
          editable={true} 
        />
        <Feather name="x" size={24} color="black" />
     </TouchableOpacity>
      <SearchBox
          imageSource={require('../../assets/fast_food.jpg')}
          distance={5} 
          title="Burger King"
          price={88.5}
          rating={4.9}
          totalReviews={2395}
          backgroundColor="bg-yellow text-black"
          onPress={() => navigation.navigate("restaurantpage")}
        />
        <SearchBox
          imageSource={require('../../assets/fast_food.jpg')}
          distance={5} 
          title="Burger King"
          price={88.5}
          rating={4.9}
          totalReviews={2395}
          backgroundColor="bg-yellow text-black"
          onPress={() => navigation.navigate("restaurantpage")}
        />
      
      <StatusBar style="auto" />
      </ScrollView>
    </Background>
  );
}
