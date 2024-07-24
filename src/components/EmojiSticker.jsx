import React from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { View } from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

const EmojiSticker = ({imageSize, stickerSource}) => {
  const scaleImage = useSharedValue(imageSize)
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const doubleTap = Gesture.Tap()
  .numberOfTaps(2).onStart(() => {
    if(scaleImage.value !== imageSize * 2) {
      scaleImage.value *= 2
    }
  })

  const imageStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(scaleImage.value),
      height: withSpring(scaleImage.value)
    }
  })

  const drag = Gesture.Pan()
  .onChange((event) => {
    translateX.value += event.changeX
    translateY.value += event.changeY
  })

  const containerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value
        },
        {
          translateY: translateY.value
        },
      ]
    }
  })

  return (
    <GestureDetector gesture={drag}>
      <Animated.View className={"-top-[350]"} style={[containerStyle]}>
        <GestureDetector gesture={doubleTap}>
          <Animated.Image
            source={stickerSource}
            resizeMode='contain'
            style={[imageStyle, {width: imageSize, height: imageSize}]}
          />
        </GestureDetector>
      </Animated.View>
    </GestureDetector>
  )
}

export default EmojiSticker
