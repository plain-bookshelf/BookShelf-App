import { useEffect, useRef, useState } from "react";
import { AppState } from "react-native";
import {
  getExpiresAt,
  setExpiresAt,
  removeExpiresAt,
} from "@/storage/emailTimerStorage";

const FIVE_MINUTES = 5 * 60 * 1000;

export const useEmailTimer = (scope: string, email: string) => {
  const [remaining, setRemaining] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const expiresAtRef = useRef<number | null>(null);

  const formatTime = (ms: number) => {
    const s = Math.ceil(ms / 1000);
    return `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
  };

  const tick = () => {
    if (!expiresAtRef.current) return;

    const remain = expiresAtRef.current - Date.now();

    if (remain <= 0) {
      setRemaining(0);
      expiresAtRef.current = null;
      removeExpiresAt(scope, email);
      return;
    }

    setRemaining(remain);
    timeoutRef.current = setTimeout(tick, 1000);
  };

  const start = async () => {
    const expiresAt = Date.now() + FIVE_MINUTES;

    expiresAtRef.current = expiresAt;
    await setExpiresAt(scope, email, expiresAt);

    tick();
  };

  const clear = async () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    expiresAtRef.current = null;
    await removeExpiresAt(scope, email);
    setRemaining(0);
  };

  useEffect(() => {
    getExpiresAt(scope, email).then((stored) => {
      if (!stored) return;
      expiresAtRef.current = stored;
      tick();
    });

    const sub = AppState.addEventListener("change", (state) => {
      if (state === "active") {
        getExpiresAt(scope, email).then((stored) => {
          if (!stored) return;
          expiresAtRef.current = stored;
          tick();
        });
      }
    });

    return () => {
      sub.remove();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [scope, email]);

  return {
    timeText: formatTime(remaining),
    isExpired: remaining <= 0,
    start,
    clear,
  };
};