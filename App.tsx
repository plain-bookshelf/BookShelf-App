import RootNavigator from '@/navigation/RootNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import SystemNavigationBar from 'react-native-system-navigation-bar';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    SystemNavigationBar.navigationHide();
  }, [])

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
