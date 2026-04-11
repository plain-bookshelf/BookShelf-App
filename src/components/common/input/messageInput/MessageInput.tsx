import * as S from "./style";
import { colorStyle } from "@/styles/colorStyle";
import btn_chatbot_send_default from "@/assets/btn_chatbot-send_default.png";
import { Pressable } from "react-native";
import { Image } from "react-native";

interface MessageInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  onSend: () => void;
}

export default function MessageInput({ placeholder, value, onChangeText, onSend }: MessageInputProps) {
  return (
    <S.Container>
      <S.Input 
        placeholder={placeholder} 
        placeholderTextColor={colorStyle.defaultGray} 
        onChangeText={onChangeText} 
        value={value}
      />
      <Pressable onPress={onSend}>
        <Image source={btn_chatbot_send_default} style={{ width: 24, height: 24 }} />
      </Pressable>
    </S.Container>
  );
}