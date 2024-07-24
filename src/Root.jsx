import ImageViewer from './components/ImageViewer'
import PlaceholderImage from "./../assets/images/background-image.png"
import * as ImagePicker from 'expo-image-picker';
import { Platform, View } from 'react-native'
import Button from './components/Button'
import { useRef, useState } from 'react';
import IconButton from './components/IconButton';
import CircleButton from './components/CircleButton';
import EmojiPicker from './components/EmojiPicker';
import EmojiList from './components/EmojiList';
import * as MediaLibrary from 'expo-media-library';
import { captureRef } from 'react-native-view-shot';
import domtoimage from 'dom-to-image';

const Root = () => {
  const [status, requestPermission] = MediaLibrary.usePermissions();
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAppOptions, setShowAppOptions] = useState(false)
  const [isModalVisible, setisModalVisible] = useState(false)
  const [pickedEmoji, setPickedEmoji] = useState(false)

  const imageRef = useRef()

  if (status === null) {
    requestPermission();
  }

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

  const onSaveImageAsync = async () => {

    if (Platform.OS !== "web") {

        try {
        const localUri = await captureRef(imageRef, {
          height: 440,
          quality: 1,
        })
    
        await MediaLibrary.saveToLibraryAsync(localUri);
        if (localUri) {
          alert("Saved");
        }
        } catch (e) {
        console.log(e);
        }
    } else {
      try {

        const dataUrl = await domtoimage.toJpeg(imageRef.current, {
          quality: 0.95,
          width: 320,
          height: 440,
        })
  
        let link = document.createElement("a")
        link.download = "sticker-smash.jpeg"
        link.herf = dataUrl
        link.click()
      } catch (e) {
        console.log(e);
      }
    }
  }
  return (
    <>
      <ImageViewer 
        placeholderImageSource={PlaceholderImage} 
        imageRef={imageRef} 
        selectedImage={selectedImage} 
        pickedEmoji={pickedEmoji}
      />

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
