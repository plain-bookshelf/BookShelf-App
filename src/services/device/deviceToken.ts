import messaging from '@react-native-firebase/messaging';

export const requestNotificationPermission = async (): Promise<boolean> => {
  const authStatus = await messaging().requestPermission();

  return (
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL
  );
};

export const getDeviceToken = async (): Promise<string> => {
  const token = await messaging().getToken();

  if (!token) {
    throw new Error("FCM 디바이스 토큰 발급 실패");
  }

  return token;
};
