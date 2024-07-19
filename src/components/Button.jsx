import FontAwesome from '@expo/vector-icons/FontAwesome'
import React from 'react'
import { Pressable, Text, View } from 'react-native'

const Button = ({lable, theme, onPress}) => {

  if(theme === "primary") {
    return (
      <View className={"w-80 h-16 mx-5 items-center justify-center m-3 border-4 border-solid border-[#ffd33d] rounded-2xl"}>
        <Pressable className={"rounded-lg w-full h-full grid items-center justify-center bg-white"} onPress={onPress}>
          <FontAwesome name={"picture-o"} size={18} color={"#25292e"} className={"pr-2"}/>
          <Text className={"text-[#25292e] text-base"}>{lable}</Text>
        </Pressable >      
      </View> 
    )
  }

  return (
    <View className={"w-80 h-16 mx-5 items-center justify-center p-3"}>
      <Pressable className={"rounded-lg w-full h-full grid items-center justify-center"} onPress={onPress}>
        <Text className={"text-white text-base"}>{lable}</Text>
      </Pressable>      
    </View>
  )
}

export default Button
