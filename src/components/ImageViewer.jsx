import { Image, View } from "react-native"
import EmojiSticker from "./EmojiSticker"


const ImageViewer = ({placeholderImageSource, selectedImage, pickedEmoji}) => {
  const imagesSource = selectedImage ? {uri: selectedImage} : placeholderImageSource
  return (
    <View className="flex-1 pt-14">
      <Image source={imagesSource} className="w-80 h-[440px] rounded-2xl" />
      {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji}/>}
    </View>
  )
}

export default ImageViewer
