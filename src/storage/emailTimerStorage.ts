import EncryptedStorage from "react-native-encrypted-storage";

const KEY_PREFIX = "email_verification_expires_at";

const buildKey = (scope: string, email: string) =>
  `${KEY_PREFIX}:${scope}:${email.trim().toLowerCase()}`;

export const setExpiresAt = async ( scope: string, email: string, expiresAt: number ) => {
  try {
    await EncryptedStorage.setItem(buildKey(scope, email), String(expiresAt));
  } catch {
    throw new Error("이메일 타이머 저장 실패");
  }
};

export const getExpiresAt = async ( scope: string, email: string ): Promise<number | null> => {
  try {
    const value = await EncryptedStorage.getItem(buildKey(scope, email));
    return Number(value) ?? null;
  } catch {
    return null;
  }
};

export const removeExpiresAt = async (scope: string, email: string): Promise<void> => {
  try {
    await EncryptedStorage.removeItem(buildKey(scope, email));
  } catch {
    throw new Error("이메일 타이머 삭제 실패");
  }
};