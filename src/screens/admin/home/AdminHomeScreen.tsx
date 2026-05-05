import Typography from "@/components/common/typography/Typography";
import { useLogout } from "@/hooks";
import * as S from "./style"

export default function AdminHomeScreen() {
  const { mutate: logout, isPending } = useLogout();

  return (
    <S.Container>
      <S.Content>
        <Typography children="관리자 홈" font="semiBold24" color="defaultBlack" />
        <Typography children="관리자 전용 기능을 이곳에서 관리할 수 있습니다." font="regular16" color="labelGray" />
      </S.Content>

      <S.LogoutButton onPress={() => logout()} disabled={isPending}>
        <Typography children="로그아웃" font="semiBold16" color="defaultWhite" />
      </S.LogoutButton>
    </S.Container>
  );
}
