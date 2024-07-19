import ImageViewer from './components/ImageViewer'
import PlaceholderImage from "./../assets/images/background-image.png"
import * as ImagePicker from 'expo-image-picker';
import { View } from 'react-native'
import Button from './components/Button'
import { useState } from 'react';
import IconButton from './components/IconButton';
import CircleButton from './components/CircleButton';

const Root = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAppOptions, setShowAppOptions] = useState(false)

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    })

    if (!result.canceled) {
      setSelectedImage(() => result.assets[0].uri);
      setShowAppOptions(() => true);
    } else {
      alert("You did not select any image.")
    }
  }

  const onReset = () => {
    setShowAppOptions(() => false);
  }

  const onAddSticker = () => {
    
  }

  const onSaveImageAsync = () => {
   
  }
  return (
    <View>
      <ImageViewer placeholderImageSource={PlaceholderImage} selectedImage={selectedImage}/>

     {showAppOptions ?  
     <View className={"absolute bottom-20"}>
      <View className={"items-center flex-row"}>
        <IconButton icon={"refresh"} lable={"Reset"} onPress={onReset}/>
        <CircleButton onPress={onAddSticker}/>
        <IconButton icon={"save-alt"} lable={"Save"} onPress={onSaveImageAsync}/>
      </View>
     </View> 
     : 
      <View className={"grid max-w-[150px] mx-auto items-center"}>
        <Button theme="primary" lable={"Choose a photo"} onPress={pickImageAsync}/>
        <Button lable={"Use this photo"} onPress={() => setShowAppOptions(() => true)}/>
      </View>}
    </View>
  )
}

export default Root
