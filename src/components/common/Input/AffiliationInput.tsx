import * as S from "./style"
import styled from "@emotion/native";
import { colorStyle } from "@/styles/colorStyle";
import Typography from "../typography/Typography";
import { useState } from "react";
import icon_search_default from "@/assets/icon_search-_default.png"
import { Image } from "react-native";

interface AffiliationInputProps {
  label?: string,
  value: string,
  onChange: (text: string) => void,
}

export default function AffiliationInput({ label, value, onChange }: AffiliationInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container>
      {label && <Typography children={label} font='regular18' color='labelGray' />}
      <S.Input
        style={{ paddingLeft: 44, position: 'relative' }}
        placeholder='소속 도서관 검색'
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        isFocused={isFocused}
        value={value}
        onChangeText={onChange}
        placeholderTextColor={colorStyle.defaultGray}
      />
      <Image source={icon_search_default} style={{ width: 20, height: 20, position: 'absolute', left: 17, top: 14 }} />
    </Container>
  )
}

const Container = styled.View`
  position: relative;
`