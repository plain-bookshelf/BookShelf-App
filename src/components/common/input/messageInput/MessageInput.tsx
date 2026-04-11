import * as S from "./style";
import { ColorKey, colorStyle } from "@/styles/colorStyle";
import btn_chatbot_send_default from "@/assets/btn_chatbot-send_default.png";
import { Pressable } from "react-native";
import { Image } from "react-native";
import { useState } from "react";

interface MessageInputProps {
  backgroundColor: ColorKey;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  onSend: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

export default function MessageInput({ backgroundColor, placeholder, value, onChangeText, onSend, onFocus, onBlur }: MessageInputProps) {
  
  return (
    <S.Container backgroundColor={backgroundColor}>
      <S.Input 
        placeholder={placeholder} 
        placeholderTextColor={colorStyle.defaultGray} 
        onChangeText={onChangeText} 
        value={value}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <Pressable onPress={onSend}>
        <Image source={btn_chatbot_send_default} style={{ width: 24, height: 24 }} />
      </Pressable>
    </S.Container>
  );
}