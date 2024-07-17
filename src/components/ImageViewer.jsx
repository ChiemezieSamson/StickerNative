import { Image, View } from "react-native"


const ImageViewer = ({placeholderImageSource}) => {
  return (
    <View className="">
      <Image source={placeholderImageSource} className="w-80 mx-auto h-[440px] rounded-2xl" />
    </View>
  )
}

export default ImageViewer
