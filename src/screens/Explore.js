import * as React from "react";
import { View, Text, TouchableOpacity, TextInput, ScrollView, Image } from "react-native";
import Background from "../components/Background";
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';


import FoodSelectionCircle from '../components/Box/FoodSelection';

export default function Explore({ navigation }) {
  return (
    <Background>
    <ScrollView>
      <View className=" justify-center pt-4 pl-6">
        <TouchableOpacity>
          <View className="flex flex-row">
            <Text className="text-black text-left font-inter text-xs font-normal">Your Location</Text>
            <View className ="mt-[2px] mx-1">
              <AntDesign name="down" size={16} color="black"/>
            </View>
          </View>
        </TouchableOpacity>
        <Text className="text-black text-left font-inter text-lg font-semibold">location name</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("search")}
        className = "flex-row items-center p-3 rounded-lg  m-6 bg-white border border-[#8b91a3]">
        <Ionicons name="search-outline" size={22} color="black" />
        <TextInput
          className = "flex-1 ml-2 text-[#8b91a3] text-xs font-light"
          placeholder="Cari restoran atau menu makanan"
          placeholderTextColor="#8b91a3"
          editable={false} // Membuat TextInput tidak dapat diedit
        />

      </TouchableOpacity>
      <ScrollView horizontal={true}>
        <View className="flex flex-row">
          <FoodSelectionCircle
            imageSource={require('../../assets/fried_rice.jpg')}
            buttonText="Rice"
          />
          <FoodSelectionCircle
            imageSource={require('../../assets/sushi.jpg')}
            buttonText="Japanese"
          />
          <FoodSelectionCircle
            imageSource={require('../../assets/fast_food.jpg')}
            buttonText="Fast Food"
          />
          <FoodSelectionCircle
            imageSource={require('../../assets/bakery.jpg')}
            buttonText="Bakery"
          />
          <FoodSelectionCircle
            imageSource={require('../../assets/bakso.jpg')}
            buttonText="Bakso"
          />
          <FoodSelectionCircle
            imageSource={require('../../assets/sweets.jpg')}
            buttonText="Sweets"
          />
          <FoodSelectionCircle
            imageSource={require('../../assets/beverages.jpg')}
            buttonText="Beverages"
          />
          <FoodSelectionCircle
            imageSource={require('../../assets/chicken_and_duck.jpg')}
            buttonText="Chicken"
          />
        </View>
      </ScrollView>
      <View className="flex-row items-center justify-between py-2 px-4">
        <Text className="text-black text-left font-inter text-base font-bold">Top Rated</Text>
        <TouchableOpacity>
          <Text className="text-gray font-normal text-sm">See More</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true}>
        <View className="flex flex-row py-2 px-4">
          <View className="flex-1 m-2">
            <TouchableOpacity className="items-center p-4 rounded-lg bg-[#FFF] shadow-xl h-52 w-60 gap-x-1 " onPress={() => navigation.navigate("restaurantpage")}>
            </TouchableOpacity>
          </View>
          <View className="flex-1 m-2">
            <TouchableOpacity className="items-center p-4 rounded-lg bg-[#FFF] shadow-xl h-52 w-60 gap-x-1">
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View className="flex-row items-center justify-between py-2 px-4">
        <Text className="text-black text-left font-inter text-base font-bold">Sedang Promo</Text>
        <TouchableOpacity>
          <Text className="text-gray font-normal text-sm">See More</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true}>
        <View className="flex flex-row py-2 px-4">
          <View className="flex-1 m-2">
            <TouchableOpacity className="items-center p-4 rounded-lg bg-[#FFF] shadow-xl h-52 w-60 gap-x-1 ">
            </TouchableOpacity>
          </View>
          <View className="flex-1 m-2">
            <TouchableOpacity className="items-center p-4 rounded-lg bg-[#FFF] shadow-xl h-52 w-60 gap-x-1">
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      </ScrollView>
    </Background>
  );
}
