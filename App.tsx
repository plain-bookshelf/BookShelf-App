import RootNavigator from '@/navigation/RootNavigator';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import ImmersiveMode from "react-native-immersive-mode";

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    ImmersiveMode.fullLayout(true);
    ImmersiveMode.setBarMode("FullSticky");
  }, [])

  return (
    <SafeAreaProvider>
      <RootNavigator />
    </SafeAreaProvider>
  );
}

export default App;
