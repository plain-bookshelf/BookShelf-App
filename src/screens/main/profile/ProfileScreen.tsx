import ActionCard from "./components/actionCard/ActionCard";
import InfoCard from "./components/infoCard/InfoCard";
import MainProfileLayout from "@/components/layout/mainLayout/MainProfileLayout";
import icon_tooltip_default from "@/assets/icon_tooltip_default.png";
import * as S from "./style";
import Typography from "@/components/common/typography/Typography";
import img_profile_test from "@/assets/img_profile_test.png";
import icon_edit_avatar_default from "@/assets/icon_edit-avatar_default.png";
import icon_logout_default from "@/assets/icon_logout_default.png";
import icon_edit_profile_default from "@/assets/icon_edit-profile_default.png"

export default function ProfileScreen() {
  return(
    <MainProfileLayout>
      <S.ProfileCardContainer>
        <S.ProfileImage source={img_profile_test} />
        <Typography font='bold22' color='defaultBlack' children='둥근네모' />
      </S.ProfileCardContainer>
      <S.ContentBox>
      <S.TitleBox>
        <Typography font='medium16' color='defaultGreen' children='회색인간 ' />
        <Typography font='medium16' color='defaultBlack' children='대여 기간이 ' />
        <Typography font='medium16' color='defaultGreen' children='3일 ' />
        <Typography font='medium16' color='defaultBlack' children='남았습니다.' />
      </S.TitleBox>
      </S.ContentBox>
      <S.ContentBox>
      <S.InfoCardContainer>
        <InfoCard title='대여 중인 책' value='10권' />
        <InfoCard title='예약한 책' value='10권' />
        <InfoCard title='연체된 책' value='10권' />
      </S.InfoCardContainer>
      </S.ContentBox>
      <S.ContentBox>
        <S.ActionCardBox>
          <ActionCard title='도움말' color='defaultBlack' icon={icon_tooltip_default} onPress={() => {}} />
          <ActionCard title='정보 수정' color='defaultBlack' icon={icon_edit_profile_default} onPress={() => {}} />
          <ActionCard title='로그아웃' color='logoutRed' icon={icon_logout_default} onPress={() => {}} />
          <ActionCard title='회원탈퇴' color='logoutRed' icon={icon_logout_default} onPress={() => {}} />
        </S.ActionCardBox>
      </S.ContentBox>
    </MainProfileLayout>
  )
}