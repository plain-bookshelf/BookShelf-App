import ActionCard from "./components/actionCard/ActionCard";
import InfoCard from "./components/infoCard/InfoCard";
import icon_tooltip_default from "@/assets/icon_tooltip_default.png";
import * as S from "./style";
import Typography from "@/components/common/typography/Typography";
import img_profile_test from "@/assets/img_profile_test.png";
import icon_logout_default from "@/assets/icon_logout_default.png";
import icon_edit_profile_default from "@/assets/icon_edit-profile_default.png";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import LogoutModal from "@/components/common/modal/LogoutModal";
import WithdrawalModal from "@/components/common/modal/WithdrawalModal";
import type { ProfileNav } from "@/navigation/type";
import useAuthStore from "@/store/useAuthStore";
import useUserStore from "@/store/useUserStore";
import { logout } from "@/services/api/auth";
import { Image, Pressable } from "react-native";
import icon_edit_avatar_default from "@/assets/icon_edit-avatar_default.png"
import { launchImageLibrary } from "react-native-image-picker";
import { useProfileChange } from "@/hooks";

export default function ProfileScreen() {
  const navigation = useNavigation<ProfileNav>();
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);
  const [withdrawModalVisible, setWithdrawModalVisible] = useState(false);
  const clearTokens = useAuthStore((state) => state.clearTokens);
  const profileImage = useUserStore((state) => state.user?.profile_image);
  const { mutate: profileChange, isPending: isProfileChanging } = useProfileChange();

  const handleLogout = async () => {
    await clearTokens();
    await logout();
    setLogoutModalVisible(false);
  };

  const handleWithdraw = () => {
    // TODO: 회원탈퇴 로직 연동
    setWithdrawModalVisible(false);
  };

  const handleProfileChange = async () => {
    if (isProfileChanging) return;

    const result = await launchImageLibrary({
      mediaType: "photo",
      selectionLimit: 1,
    });

    if (result.didCancel || result.errorCode) return;

    const uri = result.assets?.[0]?.uri;
    if (!uri) return;

    profileChange(uri);
  };

  return(
    <S.Container>
      <S.ProfileCardContainer>
        <S.ProfileImagBox onPress={handleProfileChange} disabled={isProfileChanging}>
          <Image
            source={profileImage ? { uri: profileImage } : img_profile_test}
            style={{ width: 72, height: 72, borderRadius: 36 }}
          />
          <Image source={icon_edit_avatar_default} style={{ width: 24, height: 24, position: 'absolute', bottom: 0, right: 0 }} />
        </S.ProfileImagBox>
        <S.ProfileName>
          <Typography font='bold22' color='defaultBlack' children='둥근네모' />
          <Image source={icon_edit_avatar_default} style={{ width: 24, height: 24 }} />
        </S.ProfileName>
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
        <Pressable onPress={() => navigation.navigate('MyBooks', { initialTab: 'Borrowed' })}>
          <InfoCard title='대여 중인 책' value='10권' />
        </Pressable>
        <Pressable onPress={() => navigation.navigate('MyBooks', { initialTab: 'Reserved' })}>
          <InfoCard title='예약한 책' value='10권' />
        </Pressable>
        <Pressable onPress={() => navigation.navigate('MyBooks', { initialTab: 'Overdue' })}>
          <InfoCard title='연체된 책' value='10권' />
        </Pressable>
      </S.InfoCardContainer>
      </S.ContentBox>
      <S.ContentBox>
        <S.ActionCardBox>
          <ActionCard
            title='도움말'
            color='defaultBlack'
            icon={icon_tooltip_default}
            onPress={() => {}}
          />
          <ActionCard
            title='로그아웃'
            color='logoutRed'
            icon={icon_logout_default}
            onPress={() => setLogoutModalVisible(true)}
          />
          <ActionCard
            title='회원탈퇴'
            color='logoutRed'
            icon={icon_logout_default}
            onPress={() => setWithdrawModalVisible(true)}
          />
        </S.ActionCardBox>
      </S.ContentBox>
      <LogoutModal
        visible={logoutModalVisible}
        title="로그아웃 하시겠습니다?"
        description={`언제든 다시 로그인하고\n진행 상황을 불러올 수 있습니다`}
        confirmLabel="로그아웃"
        cancelLabel="취소"
        onConfirm={handleLogout}
        onCancel={() => setLogoutModalVisible(false)}
      />
      <WithdrawalModal
        visible={withdrawModalVisible}
        title="회원탈퇴 하시겠습니까?"
        description={`회원 탈퇴를 진행하시기 위해\n“동의합니다”를 입력해주세요`}
        confirmLabel="회원탈퇴"
        cancelLabel="취소"
        onConfirm={handleWithdraw}
        onCancel={() => setWithdrawModalVisible(false)}
      />
    </S.Container>
  )
}