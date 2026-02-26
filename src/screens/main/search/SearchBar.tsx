import { Image, Pressable } from "react-native"
import * as S from "./SearchBar.style"
import btn_previous_main from "@/assets/btn_previous_main.png"
import { useState } from "react";
import { colorStyle } from "@/styles/colorStyle";

interface SearchBarProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;

}

/* 지금은 Screen/search/ 아래에 하위 파일로 있지만 나중에 components/main 이나 components/common 쪽으로 빼도 괜찮을 듯 */
export default function SearchBar({ placeholder, value, onChangeText }: SearchBarProps) {

  return(
    <S.Container>
      <Pressable>
        <Image source={btn_previous_main} style={{ width: 28, height: 28 }} />
      </Pressable>
      <S.SearchBar
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={colorStyle.defaultGray}
      />
    </S.Container>
  )
}