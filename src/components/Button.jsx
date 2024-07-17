import React from 'react'
import { Pressable, Text, View } from 'react-native'

const Button = ({lable}) => {
  return (
    <View className={"w-80 h-16 mx-5 items-center justify-center p-3"}>
      <Pressable className={"rounded-lg w-full h-full grid items-center justify-center"} onPress={() => alert('You pressed a button.')}>
        <Text className={"text-white text-base"}>{lable}</Text>
      </Pressable>      
    </View>
  )
}

export default Button
