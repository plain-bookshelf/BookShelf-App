/**
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import RootNavigator from '@/navigation/RootNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Mock the native stack navigator
jest.mock('@react-navigation/native-stack', () => ({
  createNativeStackNavigator: jest.fn(() => ({
    Navigator: jest.fn(({ children }) => children),
    Screen: jest.fn(() => null),
  })),
}));

describe('RootNavigator Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders correctly', async () => {
    await ReactTestRenderer.act(() => {
      ReactTestRenderer.create(<RootNavigator />);
    });
  });

  test('creates a native stack navigator', async () => {
    await ReactTestRenderer.act(() => {
      ReactTestRenderer.create(<RootNavigator />);
    });

    expect(createNativeStackNavigator).toHaveBeenCalled();
  });

  test('renders Stack.Navigator', async () => {
    const mockNavigator = jest.fn(({ children }) => children);
    const mockScreen = jest.fn(() => null);
    
    (createNativeStackNavigator as jest.Mock).mockReturnValue({
      Navigator: mockNavigator,
      Screen: mockScreen,
    });

    await ReactTestRenderer.act(() => {
      ReactTestRenderer.create(<RootNavigator />);
    });

    expect(mockNavigator).toHaveBeenCalled();
  });

  test('configures home screen correctly', async () => {
    const mockNavigator = jest.fn(({ children }) => children);
    const mockScreen = jest.fn(() => null);
    
    (createNativeStackNavigator as jest.Mock).mockReturnValue({
      Navigator: mockNavigator,
      Screen: mockScreen,
    });

    await ReactTestRenderer.act(() => {
      ReactTestRenderer.create(<RootNavigator />);
    });

    expect(mockScreen).toHaveBeenCalled();
    const screenCall = mockScreen.mock.calls[0][0];
    expect(screenCall.name).toBe('home');
    expect(screenCall.component).toBeDefined();
  });

  test('temp component renders empty fragment', async () => {
    let tree;
    await ReactTestRenderer.act(() => {
      tree = ReactTestRenderer.create(<RootNavigator />);
    });

    expect(tree).toBeDefined();
  });

  test('exports RootNavigator as default', () => {
    expect(RootNavigator).toBeDefined();
    expect(typeof RootNavigator).toBe('function');
  });

  test('RootNavigator returns valid React element', () => {
    const element = RootNavigator();
    expect(React.isValidElement(element)).toBe(true);
  });

  test('matches snapshot', async () => {
    let tree;
    await ReactTestRenderer.act(() => {
      tree = ReactTestRenderer.create(<RootNavigator />);
    });

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
describe('RootNavigator - extended stack configuration', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Stack.Screen called with expected name and component', async () => {
    const mockNavigator = jest.fn(({ children }) => children);
    const mockScreen = jest.fn(() => null);
    (createNativeStackNavigator as jest.Mock).mockReturnValue({
      Navigator: mockNavigator,
      Screen: mockScreen,
    });
    await ReactTestRenderer.act(() => {
      ReactTestRenderer.create(<RootNavigator />);
    });
    expect(mockScreen).toHaveBeenCalled();
    const firstCallArg = mockScreen.mock.calls[0]?.[0];
    expect(firstCallArg).toBeDefined();
    expect(firstCallArg.name).toBe('home');
    expect(firstCallArg.component).toBeDefined();
  });

  test('Navigator is instantiated once and wraps children', async () => {
    const mockNavigator = jest.fn(({ children }) => children);
    const mockScreen = jest.fn(() => null);
    (createNativeStackNavigator as jest.Mock).mockReturnValue({
      Navigator: mockNavigator,
      Screen: mockScreen,
    });
    await ReactTestRenderer.act(() => {
      ReactTestRenderer.create(<RootNavigator />);
    });
    expect(mockNavigator).toHaveBeenCalledTimes(1);
  });
});