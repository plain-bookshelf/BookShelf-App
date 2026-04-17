import EncryptedStorage from 'react-native-encrypted-storage';

const REFRESH_TOKEN_KEY = 'refresh_token';

/* 웹에서 쓰던 localstorage랑 사용 방식 자체는 큰 차이 없음
   JS 환경에서 스토리지에 바로 접근하지 못해서 비동기 처리해야 함 */
export const refreshTokenStorage = {
  async get(): Promise<string | null> {
    try {
      const value = await EncryptedStorage.getItem(REFRESH_TOKEN_KEY);
      return value ?? null;
    } catch {
      return null;
    }
  },

  async set(token: string): Promise<void> {
    try {
      await EncryptedStorage.setItem(REFRESH_TOKEN_KEY, token);
    } catch {
      throw new Error("토큰 저장 실패");
    }
  },

  async remove(): Promise<void> {
    try {
      await EncryptedStorage.removeItem(REFRESH_TOKEN_KEY);
    } catch {
      throw new Error("토큰 삭제 실패");
    }
  },
};
