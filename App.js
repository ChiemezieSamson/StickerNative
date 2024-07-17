import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Root from './src/Root';

export default function App() {
  return (
    <>
      <View className="grid h-screen items-center justify-center bg-[#25292e]">
        <Root />
        <StatusBar style="auto" />
      </View>
    </>
  );
}
