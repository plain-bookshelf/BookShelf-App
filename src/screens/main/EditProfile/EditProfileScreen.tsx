import * as S from "./style";
import btn_go_back_default from "@/assets/btn_previous_main.png";
import btn_complete_default from "@/assets/btn_complete_default.png"
import img_profile_test from "@/assets/img_profile_test.png"
import icon_edit_avatar_default from "@/assets/icon_edit-avatar_default.png"
import { Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ProfileNav } from "@/navigation/type";
import Typography from "@/components/common/typography/Typography";
import AffiliationInput from "@/components/common/input/AffiliationInput";
import { useEffect, useState } from "react";
import KeyboardDismiss from "@/components/common/keyboardDismiss/KeyboardDismiss";
import DefaultInput from "@/components/common/input/DefaultInput";
import { isValidEmail } from "@/utils/isValidEmail";
import Button from "@/components/common/button/Button";

export default function EditProfileScreen() {
  const navigation = useNavigation<ProfileNav>();
  const [affiliationValue, setAffiliationValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [isEmailError, setIsEmailError] = useState(false);
  const [isChangeInfo, setIsChangeInfo] = useState(false);

  useEffect(() => {
    if (emailValue === '') {
      setIsEmailError(false);
      return;
    }

    if (isValidEmail(emailValue)) {
      setIsEmailError(false);
    } else {
      setIsEmailError(true);
    }
  }, [emailValue]);

  useEffect(() => {
    setIsChangeInfo(affiliationValue !== '' && !isEmailError);
  }, [affiliationValue, emailValue]);

  return (
    <KeyboardDismiss>
      <S.Container>
        <S.Header>
          <Pressable onPress={() => navigation.goBack()}>
            <Image source={btn_go_back_default} style={{ width: 28, height: 28 }} />
          </Pressable>
          <Pressable onPress={() => {}}>
            <Image source={btn_complete_default} style={{ width: 24, height: 24 }} />
          </Pressable>
        </S.Header>

        <S.ContentBox>
          <S.ProfileCard>
            <S.ProfileImagBox>
              <Image source={img_profile_test} style={{ width: 72, height: 72 }} />
              <Image source={icon_edit_avatar_default} style={{ width: 24, height: 24, position: 'absolute', bottom: 0, right: 0 }} />
            </S.ProfileImagBox>
            <S.ProfileName>
              <Typography font='bold22' color='defaultBlack' children='둥근네모' />
              <Image source={icon_edit_avatar_default} style={{ width: 24, height: 24 }} />
            </S.ProfileName>
          </S.ProfileCard>

          <S.InputBox>
            <AffiliationInput value={affiliationValue} onChange={setAffiliationValue} />
            <DefaultInput label='' value={emailValue} onChangeText={setEmailValue} placeholder='이메일 입력' isError={isEmailError} warningMessage='올바르지 않은 이메일 형식입니다.' />
          </S.InputBox>
        </S.ContentBox>

        {isChangeInfo &&
          <S.ButtonBox>
            <Button font='semiBold16' label='수정된 정보 저장' onPress={() => {}} isValid={isChangeInfo} />
          </S.ButtonBox>
        }
      </S.Container>
   </KeyboardDismiss>
  );
}