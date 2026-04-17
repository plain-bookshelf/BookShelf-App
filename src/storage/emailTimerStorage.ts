import EncryptedStorage from "react-native-encrypted-storage";

const KEY_PREFIX = "email_verification_expires_at";

const buildKey = (scope: string, email: string) =>
  `${KEY_PREFIX}:${scope}:${email.trim().toLowerCase()}`;

export const setExpiresAt = async (
  scope: string,
  email: string,
  expiresAt: number
) => {
  await EncryptedStorage.setItem(buildKey(scope, email), String(expiresAt));
};

export const getExpiresAt = async (
  scope: string,
  email: string
) => {
  const value = await EncryptedStorage.getItem(buildKey(scope, email));
  return value ? Number(value) : null;
};

export const removeExpiresAt = async (scope: string, email: string) => {
  await EncryptedStorage.removeItem(buildKey(scope, email));
};