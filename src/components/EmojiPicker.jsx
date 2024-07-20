import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import React from 'react'
import { Modal, Pressable, Text, View } from 'react-native'

const EmojiPicker = ({isVisible, children, onClose}) => {
  return (
    <Modal animationType='slide' transparent={true} visible={isVisible}>
      <View className={"h-1/4 w-full bg-[#25292e] rounded-t-2xl absolute bottom-0"}>
        <View className={"h-1/6 bg-[#464C55] rounded-t-lg px-5 flex-row items-center justify-between"}>
          <Text className="text-white text-base">Choose a sticker</Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name='close' color={"#fff"} size={22} />
          </Pressable>
        </View>
        {children}
      </View>
    </Modal>
  )
}

export default EmojiPicker
