import styled from "styled-components/native";
import Typography from "@/components/common/typography/Typography";
import ContentLayout from "../ContentLayout";
import icon_search_default from "@/assets/icon_search-_default.png"
import { colorStyle } from "@/styles/colorStyle";
import { fontStyle } from "@/styles/fontStyle";
import { useEffect, useState } from "react";

interface LibraryStepProps {
  value: string,
  onChange: (text: string) => void,
  setIsStepValid: (isStepValid: boolean) => void,
}

export default function Library({ value, onChange, setIsStepValid }: LibraryStepProps) {
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if(value){
    setIsStepValid(true);
    } else{
      setIsStepValid(false);
    }
  }, [value])

    return(
      <>
        <ContentLayout>
          <Typography children='소속 도서관 입력' font='medium28' color='defaultBlack' />
          <InputContainer>
            <Typography children='회원가입하고 책마루에 가입하세요' font='regular18' color='labelGray' />
            <InputBox>
              <Input
                placeholder='소속 도서관 검색'
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                isFocused={isFocused}
                value={value}
                onChangeText={onChange} />
              <SearchIcon source={icon_search_default} />
            </InputBox>
          </InputContainer>
        </ContentLayout>
      </>
    )
}

interface InputProps {
  isError?: boolean,
  isFocused?: boolean,
}

const InputContainer = styled.View`
  flex-direction: column;
  gap: 16px;
`

const InputBox = styled.View`
  position: relative;
  flex-direction: row;
  align-items: center;
`

const Input = styled.TextInput.attrs({
  placeholderTextColor: `${( colorStyle.defaultGray )}`
})<InputProps>`
  color: ${( colorStyle.defaultBlack )};
  ${( fontStyle.regular16 )};
  width: 100%;
  height: 48px;
  background-color: ${( colorStyle.inputBarGray )};
  border-width: 1px;
  border-color: ${({ isFocused, isError }) => isFocused ? colorStyle.defaultGreen : isError ? colorStyle.defaultRed : colorStyle.inputBarGray};
  border-radius: 8px;
  align-items: center;
  padding-left: 44px;
`

const SearchIcon = styled.Image`
  position: absolute;
  width: 20px;
  height: 20px;
  left: 20px;
`