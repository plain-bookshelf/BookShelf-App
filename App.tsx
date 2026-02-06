import RootNavigator from '@/navigation/RootNavigator';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import SystemNavigationBar from 'react-native-system-navigation-bar';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    SystemNavigationBar.navigationHide();
  }, [])

  return (
    <SafeAreaProvider>
      <RootNavigator />
    </SafeAreaProvider>
  );
}

export default App;
