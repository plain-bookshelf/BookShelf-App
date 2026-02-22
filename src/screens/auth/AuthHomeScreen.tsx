import styled from '@emotion/native';
import { colorStyle } from "@/styles/colorStyle";
import AuthHomeLayout from "@/components/auth/authLayout/AuthHomeLayout";
import Typography from "@/components/common/typography/Typography";
import { Image, Pressable, View } from "react-native";
import DefaultInput from "@/components/auth/authInput/DefaultInput";
import { useEffect, useState } from "react";
import PasswordInput from "@/components/auth/authInput/PasswordInput";
import Button from "@/components/common/button/Button";
import btn_kakaoLogin_default from "@/assets/btn_kakao-login_default.png"
import btn_naverLogin_default from "@/assets/btn_naver-login_default.png"
import btn_googleLogin_default from "@/assets/btn_google-login_default.png"
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthNav, AuthStackParamList } from "@/navigation/type";
import KeyboardDismiss from '@/components/common/KeyboardDismiss';

export default function AuthHomeScreen() {
  const [loginId, setLoginId] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginFormIsValid, setLoginFormIsValid] = useState(false);
  const navigation = useNavigation<AuthNav>();
  const menus = [
    {title: '회원가입', onPress: () => navigation.navigate('SignupRoleSelect')},
    {title: '아이디 찾기', onPress: () => navigation.navigate('FindPassword')},
    {title: '비밀번호 찾기', onPress: () => navigation.navigate('FindId')}
  ];
  const socialLoginButtons = [
    {button: btn_kakaoLogin_default, onPress: () => {}},
    {button: btn_naverLogin_default, onPress: () => {}},
    {button: btn_googleLogin_default, onPress: () => {}}
  ];

  useEffect(() => {
    if(loginId.trim().length !== 0 && loginPassword.trim().length !== 0){
      setLoginFormIsValid(true);
    }
    else{
      setLoginFormIsValid(false);
    }
  }, [loginId, loginPassword])

  return(
    <KeyboardDismiss>
      <AuthHomeLayout>
        <TitleBox>
          <View>
            <Typography children='안녕하세요 :)' font='medium28' color='defaultBlack' />
            <Typography children='책 대여 서비스 책마루에요' font='medium28' color='defaultBlack' />
          </View>
          <Typography children='로그인하고 책마루를 시작해보세요' font='regular18' color='labelGray' />
        </TitleBox>

        <LoginForm>
          <InputBox>
            <DefaultInput label='' placeholder='이메일 또는 아이디 입력' isError={false} warningMessage='' value={loginId} onChangeText={setLoginId} />
            <PasswordInput label='' placeholder='비밀번호 입력' isError={false} warningMessage='' value={loginPassword} onChangeText={setLoginPassword} />
          </InputBox>
          <Button font='semiBold16' label='로그인' onPress={() => navigation.navigate('Onboarding')} isValid={loginFormIsValid} />
        </LoginForm>

        <MenuContainer>
          {menus.map((e, index) => {
            return(
              <MenuBox onPress={e.onPress} key={index}>
                <Typography children={e.title} font='medium14' color='defaultBlack' />
              </MenuBox>
            )
          })}
        </MenuContainer>

        <SocialLoginContainer>
          <SocialLoginTitleBox>
            <SocialLoginLine />
            <Typography children='소셜 로그인' font='regular16' color='socialLoginTitle' />
            <SocialLoginLine />
          </SocialLoginTitleBox>

          <SocialLoginButtonBox>
            {socialLoginButtons.map((e, index) => {
              return(
                <SocialLoginButton onPress={e.onPress} key={index} >
                  {e.button === btn_googleLogin_default ?
                    <Image source={e.button} style={{ flex: 1, height: 38, borderRadius: 8, borderWidth: 1, borderColor: colorStyle.socialLoginBorder}} /> :
                    <Image source={e.button} style={{ flex: 1, height: 40, borderRadius: 8}} />}
                </SocialLoginButton>
              )
            })}
          </SocialLoginButtonBox>
        </SocialLoginContainer>
      </AuthHomeLayout>
    </KeyboardDismiss>
  )
}

const TitleBox = styled.View`
  gap: 8px;
  padding-bottom: 41px;
`

const LoginForm = styled.View`
  gap: 32px;
  padding-bottom: 16px;
`

const InputBox = styled.View`
  gap: 16px;
`

const MenuContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  gap: 4px;
  padding-bottom: 52px;
`

const MenuBox = styled.Pressable`
  width: 100px;
  height: 25px;
  justify-content: center;
  align-items: center;
`

const SocialLoginContainer = styled.View`
  gap: 20px;
`

const SocialLoginTitleBox = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;
`

const SocialLoginLine = styled.View`
  flex-direction: row;
  flex: 1;
  height: 1px;
  background-color: ${colorStyle.lineGray};
`

const SocialLoginButtonBox = styled.View`
  gap: 12px;
`

const SocialLoginButton = styled.Pressable`
  overflow-y: hidden;
  border-radius: 8px;
  flex-direction: row;
  justify-content: center;
`