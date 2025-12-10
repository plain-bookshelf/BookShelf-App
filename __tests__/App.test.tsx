/**
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import App from '../App';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigator from '@/navigation/RootNavigator';

// Mock the navigation components
jest.mock('@react-navigation/native', () => ({
  NavigationContainer: jest.fn(({ children }) => children),
}));

jest.mock('react-native-safe-area-context', () => ({
  SafeAreaProvider: jest.fn(({ children }) => children),
  useSafeAreaInsets: jest.fn(() => ({ top: 0, right: 0, bottom: 0, left: 0 })),
}));

jest.mock('@/navigation/RootNavigator', () => ({
  __esModule: true,
  default: jest.fn(() => null),
}));

// Mock useColorScheme
jest.mock('react-native/Libraries/Utilities/useColorScheme', () => ({
  __esModule: true,
  default: jest.fn(() => 'light'),
}));

describe('App Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders correctly', async () => {
    await ReactTestRenderer.act(() => {
      ReactTestRenderer.create(<App />);
    });
  });

  test('wraps content in SafeAreaProvider', async () => {
    await ReactTestRenderer.act(() => {
      ReactTestRenderer.create(<App />);
    });

    expect(SafeAreaProvider).toHaveBeenCalled();
  });

  test('wraps content in NavigationContainer', async () => {
    await ReactTestRenderer.act(() => {
      ReactTestRenderer.create(<App />);
    });

    expect(NavigationContainer).toHaveBeenCalled();
  });

  test('renders RootNavigator component', async () => {
    await ReactTestRenderer.act(() => {
      ReactTestRenderer.create(<App />);
    });

    expect(RootNavigator).toHaveBeenCalled();
  });

  test('component structure is correct', async () => {
    let tree;
    await ReactTestRenderer.act(() => {
      tree = ReactTestRenderer.create(<App />);
    });

    // SafeAreaProvider should be called once
    expect(SafeAreaProvider).toHaveBeenCalledTimes(1);
    // NavigationContainer should be called once
    expect(NavigationContainer).toHaveBeenCalledTimes(1);
    // RootNavigator should be called once
    expect(RootNavigator).toHaveBeenCalledTimes(1);
  });

  test('handles dark mode detection', async () => {
    const useColorScheme = require('react-native/Libraries/Utilities/useColorScheme').default;
    
    // Test with light mode
    useColorScheme.mockReturnValue('light');
    await ReactTestRenderer.act(() => {
      ReactTestRenderer.create(<App />);
    });
    expect(useColorScheme).toHaveBeenCalled();

    // Test with dark mode
    useColorScheme.mockReturnValue('dark');
    await ReactTestRenderer.act(() => {
      ReactTestRenderer.create(<App />);
    });
    expect(useColorScheme).toHaveBeenCalled();
  });

  test('matches snapshot', async () => {
    let tree;
    await ReactTestRenderer.act(() => {
      tree = ReactTestRenderer.create(<App />);
    });

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
describe('App Component - extended behaviors', () => {
  beforeEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
  });

  test('passes children correctly through SafeAreaProvider and NavigationContainer', async () => {
    const { SafeAreaProvider } = require('react-native-safe-area-context');
    const { NavigationContainer } = require('@react-navigation/native');
    let tree;
    await ReactTestRenderer.act(() => {
      tree = ReactTestRenderer.create(<App />);
    });
    expect(SafeAreaProvider).toHaveBeenCalledTimes(1);
    expect(NavigationContainer).toHaveBeenCalledTimes(1);
  });

  test('re-renders across color scheme changes without throwing', async () => {
    const useColorScheme = require('react-native/Libraries/Utilities/useColorScheme').default;
    useColorScheme.mockReturnValue('light');
    let renderer;
    await ReactTestRenderer.act(() => {
      renderer = ReactTestRenderer.create(<App />);
    });
    useColorScheme.mockReturnValue('dark');
    await ReactTestRenderer.act(() => {
      renderer.update(<App />);
    });
    expect(useColorScheme).toHaveBeenCalled();
    expect(renderer.toJSON()).toBeTruthy();
  });
});
