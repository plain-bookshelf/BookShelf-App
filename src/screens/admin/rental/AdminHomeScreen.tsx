import Typography from "@/components/common/typography/Typography";
import { useLogout } from "@/hooks";
import * as S from "./style"
import RentalRequest from "./rentalRequest/RentalRequest";

export default function AdminHomeScreen() {
  const { mutate: logout, isPending } = useLogout();

  return (
    <S.Container>
      <S.Content>
        <RentalRequest />
        <RentalRequest />
        <RentalRequest />
      </S.Content>
    </S.Container>
  );
}
