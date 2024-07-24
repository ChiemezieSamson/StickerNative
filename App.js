import { StatusBar } from 'expo-status-bar';
import Root from './src/Root';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <>
      <GestureHandlerRootView className="bg-[#25292e] items-center justify-center flex-1">
        <Root />
        <StatusBar style="light" />
      </GestureHandlerRootView>
    </>
  );
}
