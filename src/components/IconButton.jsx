import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { Pressable, Text } from 'react-native'

const IconButton = ({icon, lable, onPress}) => {
  return (
    <Pressable onPress={onPress} className="justify-center items-center">
      <MaterialIcons name={icon} size={24} color={"#fff"}/>
      <Text className={"text-white mt-3"}>{lable}</Text>
    </Pressable>
  )
}

export default IconButton
