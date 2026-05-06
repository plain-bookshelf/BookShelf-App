import ActionCard from "./components/actionCard/ActionCard";
import InfoCard from "./components/infoCard/InfoCard";
import icon_tooltip_default from "@/assets/icon_tooltip_default.png";
import * as S from "./style";
import Typography from "@/components/common/typography/Typography";
import img_profile_test from "@/assets/img_profile_test.png";
import icon_logout_default from "@/assets/icon_logout_default.png";
import { useEffect, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import LogoutModal from "@/components/common/modal/LogoutModal";
import WithdrawalModal from "@/components/common/modal/WithdrawalModal";
import type { ProfileNav } from "@/navigation/type";
import useAuthStore from "@/store/useAuthStore";
import { logout } from "@/services/api/auth";
import { Image, Pressable } from "react-native";
import type { TextInput } from "react-native";
import icon_edit_avatar_default from "@/assets/icon_edit-avatar_default.png";
import { launchImageLibrary } from "react-native-image-picker";
import type { Asset } from "react-native-image-picker";
import { useNickname, useProfileChange, useMyPage } from "@/hooks";
import type { ProfileImageUrlRequest } from "@/types";

type NicknameMessage = {
  text: string;
  color: "defaultGreen" | "defaultRed";
};

const getProfileImageMetadata = (asset: Asset): ProfileImageUrlRequest | null => {
  const { fileName, type, fileSize } = asset;

  if (!fileName || !type || !fileSize) {
    return null;
  }

  return {
    file_name: fileName,
    content_type: type,
    file_size: fileSize,
  };
};

export default function ProfileScreen() {
  const navigation = useNavigation<ProfileNav>();
  const nicknameInputRef = useRef<TextInput>(null);
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);
  const [withdrawModalVisible, setWithdrawModalVisible] = useState(false);
  const [nicknameInput, setNicknameInput] = useState("");
  const [nicknameMessage, setNicknameMessage] = useState<NicknameMessage | null>(null);
  const clearTokens = useAuthStore((state) => state.clearTokens);
  const { mutate: changeProfileImage, isPending: isProfileChanging } = useProfileChange();
  const { ValidNicknameMutation: validNicknameMutation, NicknameChangeMutation: nicknameChangeMutation } = useNickname();
  const { my } = useMyPage();
  const currentNickname = my?.nickname ?? my?.nickname ?? "";
  const isNicknameChanging = validNicknameMutation.isPending || nicknameChangeMutation.isPending;

  useEffect(() => {
    setNicknameInput(currentNickname);
  }, [currentNickname]);

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

    const imageAsset = result.assets?.[0];
    if (!imageAsset) return;

    const metadata = getProfileImageMetadata(imageAsset);
    if (!metadata) return;

    changeProfileImage(metadata);
  };

  const resetNicknameWithError = (message: string) => {
    setNicknameInput(currentNickname);
    setNicknameMessage({ text: message, color: "defaultRed" });
  };

  const handleNicknameChange = (text: string) => {
    setNicknameInput(text);
    setNicknameMessage(null);
  };

  const focusNicknameInput = () => {
    nicknameInputRef.current?.focus();
  };

  const handleNicknameBlur = async () => {
    const nextNickname = nicknameInput.trim();

    if (nextNickname === currentNickname) {
      setNicknameInput(currentNickname);
      return;
    }

    if (!nextNickname) {
      resetNicknameWithError("닉네임을 입력해주세요.");
      return;
    }

    try {
      await validNicknameMutation.mutateAsync(nextNickname);
      await nicknameChangeMutation.mutateAsync(nextNickname);
      setNicknameInput(nextNickname);
      setNicknameMessage({ text: "닉네임이 변경되었습니다.", color: "defaultGreen" });
    } catch {
      resetNicknameWithError("닉네임 변경에 실패했습니다.");
    }
  };

  return(
    <S.Container>
      <S.ProfileCardContainer>
        <S.ProfileImagBox onPress={handleProfileChange} disabled={isProfileChanging}>
          <Image
            source={my?.profile_image ? { uri: my?.profile_image } : img_profile_test}
            style={{ width: 72, height: 72, borderRadius: 36 }}
          />
          <Image source={icon_edit_avatar_default} style={{ width: 24, height: 24, position: 'absolute', bottom: 0, right: 0 }} />
        </S.ProfileImagBox>
        <S.ProfileName onPress={focusNicknameInput}>
          <S.ProfileNameInput
            ref={nicknameInputRef}
            value={nicknameInput}
            onChangeText={handleNicknameChange}
            onBlur={handleNicknameBlur}
            editable={!isNicknameChanging}
            textAlign="center"
            returnKeyType="done"
          />
          <Image source={icon_edit_avatar_default} style={{ width: 24, height: 24 }} />
        </S.ProfileName>
        {nicknameMessage && (
          <S.NicknameMessageBox>
            <Typography font='medium14' color={nicknameMessage.color} children={nicknameMessage.text} />
          </S.NicknameMessageBox>
        )}
      </S.ProfileCardContainer>

      {my?.most_little_left_rental_date && my?.most_little_left_rental_title && (
        <S.ContentBox>
          <S.TitleBox>
            <Typography font='medium16' color='defaultGreen' children={`${my?.most_little_left_rental_title} `} />
            <Typography font='medium16' color='defaultBlack' children='대여 기간이 ' />
            <Typography font='medium16' color='defaultGreen' children={`${my?.most_little_left_rental_date}일 `} />
            <Typography font='medium16' color='defaultBlack' children='남았습니다.' />
          </S.TitleBox>
        </S.ContentBox>
      )}

      <S.ContentBox>
        <S.InfoCardContainer>
          <Pressable onPress={() => navigation.navigate('MyBooks', { initialTab: 'Borrowed' })}>
            <InfoCard title='대여 중인 책' value={`${my?.rented_book_count}권`} />
          </Pressable>
          <Pressable onPress={() => navigation.navigate('MyBooks', { initialTab: 'Reserved' })}>
            <InfoCard title='예약한 책' value={`${my?.reserved_book_count}권`} />
          </Pressable>
          <Pressable onPress={() => navigation.navigate('MyBooks', { initialTab: 'Overdue' })}>
            <InfoCard title='연체된 책' value={`${my?.overdue_book_count}권`} />
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