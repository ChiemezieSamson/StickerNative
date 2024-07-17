import ImageViewer from './components/ImageViewer'
import PlaceholderImage from "./../assets/images/background-image.png"
import { View } from 'react-native'
import Button from './components/Button'

const Root = () => {
  return (
    <View>
      <ImageViewer placeholderImageSource={PlaceholderImage}/>

      <View className={"grid max-w-[150px] mx-auto items-center"}>
        <Button lable={"Choose a photo"}/>
        <Button lable={"Use this photo"}/>
      </View>
    </View>
  )
}

export default Root
