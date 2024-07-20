import ImageViewer from './components/ImageViewer'
import PlaceholderImage from "./../assets/images/background-image.png"
import * as ImagePicker from 'expo-image-picker';
import { View } from 'react-native'
import Button from './components/Button'
import { useState } from 'react';
import IconButton from './components/IconButton';
import CircleButton from './components/CircleButton';
import EmojiPicker from './components/EmojiPicker';
import EmojiList from './components/EmojiList';

const Root = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAppOptions, setShowAppOptions] = useState(false)
  const [isModalVisible, setisModalVisible] = useState(false)
  const [pickedEmoji, setPickedEmoji] = useState(false)

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
    setisModalVisible(() => true)
  }

  const onModalClose = () => {
    setisModalVisible(() => false)
  }

  const onSaveImageAsync = () => {
   
  }
  return (
    <>
      <ImageViewer placeholderImageSource={PlaceholderImage} selectedImage={selectedImage} pickedEmoji={pickedEmoji}/>

     {showAppOptions ?  
     <View className={"absolute bottom-20"}>
      <View className={"items-center flex-row"}>
        <IconButton icon={"refresh"} lable={"Reset"} onPress={onReset}/>
        <CircleButton onPress={onAddSticker}/>
        <IconButton icon={"save-alt"} lable={"Save"} onPress={onSaveImageAsync}/>
      </View>
     </View> 
     : 
      <View className={"basis-1/3 items-center"}>
        <Button theme="primary" lable={"Choose a photo"} onPress={pickImageAsync}/>
        <Button lable={"Use this photo"} onPress={() => setShowAppOptions(() => true)}/>
      </View>}

      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose}/>
      </EmojiPicker>
    </>
  )
}

export default Root
