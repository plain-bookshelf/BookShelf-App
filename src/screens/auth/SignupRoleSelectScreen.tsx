import styled from '@emotion/native';
import ActionLayout from "@/components/layout/authLayout/AuthStepComponentLayout/ActionLayout";
import StepHeader from "@/components/layout/authLayout/AuthStepComponentLayout/StepHeader";
import AuthStepLayout from "@/components/layout/authLayout/AuthStepLayout";
import Typography from "@/components/common/typography/Typography";
import btn_student_default from "@/assets/btn_role-student_default.png"
import btn_student_selected from "@/assets/btn_role-student_selected.png"
import btn_admin_default from "@/assets/btn_role-admin_default.png"
import btn_admin_selected from "@/assets/btn_role-admin_selected.png"
import { Image, Pressable } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AuthNav } from "@/navigation/type";
import { Navigate } from "react-router-dom";

export default function SignupRoleSelectScreen() {
  const [isStudent, setIsStudent] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const studentButton = isStudent ? btn_student_selected : btn_student_default;
  const adminBtnButton = isAdmin ? btn_admin_selected : btn_admin_default;

  const navigation = useNavigation<AuthNav>();

  const handleRoleSlect = (role: string) => {
    if(role === 'student'){
      if(isStudent){
        setIsStudent(false);
      }
      else{
        setIsStudent(true);
        setIsAdmin(false);
      }
    }

    else{
      if(isAdmin){
        setIsAdmin(false);
      }
      else{
        setIsAdmin(true);
        setIsStudent(false);
      }
    }
  }

  return(
    <AuthStepLayout>
      <>
        <StepHeader onPrev={() => navigation.goBack()} />
        <ActionLayout label='다음' onNext={() => navigation.navigate(isStudent ? 'UserSignup' : 'AdminSignup')} isValid={[isStudent || isAdmin]} step={1}>
          <Container>
            <TitleBox>
              <Typography children='회원가입' font='medium28' color='defaultBlack' />
              <Typography children='회원가입하고 책마루에 가입하세요' font='regular18' color='labelGray' />
            </TitleBox>

            <RoleSelectButtonBox>
              <Pressable onPress={() => handleRoleSlect('student')} style={{ flex: 1 }}>
                <Image source={studentButton} resizeMode="contain" style={{ width: '100%', height: 244 }} />
              </Pressable>

              <Pressable onPress={() => handleRoleSlect('admin')} style={{ flex: 1 }} >
                <Image source={adminBtnButton} resizeMode="contain" style={{ width: '100%', height: 244 }} />
              </Pressable>
            </RoleSelectButtonBox>
          </Container>
        </ActionLayout>
      </>
    </AuthStepLayout>
  )
}

const Container = styled.View`
  gap: 74px;
`

const TitleBox = styled.View`
  gap: 8px;
`

const RoleSelectButtonBox = styled.View`
  flex-direction: row;
  justify-content: center;
  gap: 24px;
`