import { useEffect, useRef } from "react";
import Typography from "@/components/common/typography/Typography";
import * as S from "./style";
import { Animated } from "react-native";

interface CompleteLendingProps {
  message: string;
  onClose: () => void;
}

export default function CompleteLending({ message, onClose }: CompleteLendingProps) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const handleClose = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
    }).start(({ finished }) => {
      if (finished) {
        onClose();
      }
    });
  };

  return (
    <S.Container onPress={handleClose} style={{ opacity: fadeAnim }}>
      <Typography font="semiBold14" color="defaultWhite" children={message} />
      <S.CloseMessage>
        <Typography font="regular12" color="defaultGray" children="클릭하여 닫기" />
      </S.CloseMessage>
    </S.Container>
  );
}