import * as React from "react";
import { View, Text, TouchableOpacity, TextInput, ScrollView } from "react-native";
import Background from "../../components/Background";
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 

export default function Explore({ navigation }) {
  return (
    <Background>
    <ScrollView>
      <View className=" justify-center pt-4 pl-6">
        <Text className="text-black text-left font-inter text-xs font-light">Lokasi Kamu belum fix</Text>
        <Text className="text-black text-left font-inter text-lg font-semibold">[location name]</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Bookmark")}
        className = "flex-row items-center p-3 rounded-lg  m-6 bg-white border border-[#8b91a3]">
        <Ionicons name="search-outline" size={22} color="black" />
        <TextInput
          className = "flex-1 ml-2 text-[#8b91a3] text-xs font-light"
          placeholder="Cari restoran atau menu makanan"
          placeholderTextColor="#8b91a3"
          editable={false} // Membuat TextInput tidak dapat diedit
        />
      </TouchableOpacity>
       <View className="flex flex-row">
          <View className="flex-1 m-2">
            <TouchableOpacity className="items-center p-4 rounded-lg bg-[#FFF] shadow-xl" style={{ height: 75, width: 75 }}>
              <Ionicons name="location" size={24} color="black" />
              <Text className="text-center text-[10px] font-Inter font-light mt-1">Dekat</Text>
            </TouchableOpacity>
          </View>
          <View className="flex-1 m-2">
            <TouchableOpacity className="items-center p-4 rounded-lg bg-[#FFF] shadow-xl" style={{ height: 75, width: 75 }}>
              <Ionicons name="ios-shuffle-outline" size={24} color="black" />
              <Text className="text-center text-[10px] font-Inter font-light mt-1">Random</Text>
            </TouchableOpacity>
         </View>
        <View className="flex-1 m-2">
          <TouchableOpacity className="items-center p-4 rounded-lg bg-[#FFF] shadow-xl" style={{ height: 75, width: 75 }}>
            <Entypo name="new" size={24} color="black" />
            <Text className="text-center text-[10px] font-Inter font-light mt-1 ">Baru</Text>
          </TouchableOpacity>
       </View>
       <View className="flex-1 m-2">
          <TouchableOpacity className="items-center p-4 rounded-lg bg-[#FFF] shadow-xl" style={{ height: 75, width: 75 }}>
            <Entypo name="ticket" size={24} color="black" />
            <Text className="text-center text-[10px] font-Inter font-light mt-1">Kupon</Text>
         </TouchableOpacity>
       </View>
      </View>
      <View className="flex-row items-center justify-between py-2 px-4">
        <Text className="text-black text-left font-inter text-base font-bold">Top Rated</Text>
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
