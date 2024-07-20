import React from 'react'
import { Image, View } from 'react-native'

const EmojiSticker = ({imageSize, stickerSource}) => {
  return (
    <View className={"-top-[350]"}>
      <Image 
        source={stickerSource}
        resizeMode='contain'
        style={{width: imageSize, height: imageSize}}
      />      
    </View>
  )
}

export default EmojiSticker
