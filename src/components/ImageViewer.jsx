import { Image, View } from "react-native"


const ImageViewer = ({placeholderImageSource, selectedImage}) => {
  const imagesSource = selectedImage ? {uri: selectedImage} : placeholderImageSource
  return (
    <View className="">
      <Image source={imagesSource} className="w-80 mx-auto h-[440px] rounded-2xl" />
    </View>
  )
}

export default ImageViewer
