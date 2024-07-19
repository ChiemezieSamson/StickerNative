import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import { Pressable, View } from "react-native"


const CircleButton = ({onPress}) => {
  return (
    <View className={"w-[84px] h-[84px] mx-[60px] border-4 border-[#ffd33d] rounded-[42px] p-[3px]"}>
      <Pressable onPress={onPress} className="grid items-center justify-center rrounded-[42px] bg-white">
        <MaterialIcons name="add" size={38} color={"#25292e"} />
      </Pressable>      
    </View>
  )
}

export default CircleButton
