import { colorStyle } from "@/styles/colorStyle";
import AuthHomeLayout from "@/components/layout/authLayout/AuthHomeLayout";
import Typography from "@/components/common/typography/Typography";
import { Image, View } from "react-native";
import DefaultInput from "@/components/auth/authInput/DefaultInput";
import { useEffect, useState } from "react";
import PasswordInput from "@/components/auth/authInput/PasswordInput";
import Button from "@/components/common/button/Button";
import btn_kakaoLogin_default from "@/assets/btn_kakao-login_default.png"
import btn_naverLogin_default from "@/assets/btn_naver-login_default.png"
import btn_googleLogin_default from "@/assets/btn_google-login_default.png"
import { useNavigation } from "@react-navigation/native";
import { AuthNav } from "@/navigation/type";
import KeyboardDismiss from '@/components/common/keyboardDismiss/KeyboardDismiss';
import { useLogin } from "@/hooks/useLogin";
import * as S from "./style"

export default function AuthHomeScreen() {
  const [loginId, setLoginId] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginFormIsValid, setLoginFormIsValid] = useState(false);
  const navigation = useNavigation<AuthNav>();
  const { login, isLoading, error, clearError } = useLogin();
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
        <S.TitleBox>
          <View>
            <Typography children='안녕하세요 :)' font='medium28' color='defaultBlack' />
            <Typography children='책 대여 서비스 책마루에요' font='medium28' color='defaultBlack' />
          </View>
          <Typography children='로그인하고 책마루를 시작해보세요' font='regular18' color='labelGray' />
        </S.TitleBox>

        <S.LoginForm>
          <S.InputBox>
            <DefaultInput
              label=''
              placeholder='이메일 또는 아이디 입력'
              isError={!!error}
              warningMessage={error ?? ''}
              value={loginId}
              onChangeText={(text) => { setLoginId(text); clearError(); }}
            />
            <PasswordInput
              label=''
              placeholder='비밀번호 입력'
              isError={!!error}
              warningMessage=''
              value={loginPassword}
              onChangeText={(text) => { setLoginPassword(text); clearError(); }}
            />
          </S.InputBox>
          <Button
            font='semiBold16'
            label={isLoading ? '로그인 중...' : '로그인'}
            onPress={() => login({ username: loginId.trim(), password: loginPassword })}
            isValid={loginFormIsValid && !isLoading}
          />
        </S.LoginForm>

        <S.MenuContainer>
          {menus.map((e, index) => {
            return(
              <S.MenuBox onPress={e.onPress} key={index}>
                <Typography children={e.title} font='medium14' color='defaultBlack' />
              </S.MenuBox>
            )
          })}
        </S.MenuContainer>

        <S.SocialLoginContainer>
          <S.SocialLoginTitleBox>
            <S.SocialLoginLine />
            <Typography children='소셜 로그인' font='regular16' color='socialLoginTitle' />
            <S.SocialLoginLine />
          </S.SocialLoginTitleBox>

          <S.SocialLoginButtonBox>
            {socialLoginButtons.map((e, index) => {
              return(
                <S.SocialLoginButton onPress={e.onPress} key={index} >
                  {e.button === btn_googleLogin_default ?
                    <Image source={e.button} style={{ flex: 1, height: 38, borderRadius: 8, borderWidth: 1, borderColor: colorStyle.socialLoginBorder}} /> :
                    <Image source={e.button} style={{ flex: 1, height: 40, borderRadius: 8}} />}
                </S.SocialLoginButton>
              )
            })}
          </S.SocialLoginButtonBox>
        </S.SocialLoginContainer>
      </AuthHomeLayout>
    </KeyboardDismiss>
  )
}
