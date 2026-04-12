import RootNavigator from '@/navigation/root/RootNavigator';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import ImmersiveMode from "react-native-immersive-mode";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const queryClient = new QueryClient();

  useEffect(() => {
    ImmersiveMode.fullLayout(true);
    ImmersiveMode.setBarMode("FullSticky");
  }, [])

  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <RootNavigator />
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}

export default App;
