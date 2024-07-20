import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Root from './src/Root';

export default function App() {
  return (
    <>
      <View className="bg-[#25292e] items-center justify-center flex-1">
        <Root />
        <StatusBar style="auto" />
      </View>
    </>
  );
}
