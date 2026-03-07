import Typography from "@/components/common/typography/Typography";
import * as S from "./style"

interface InfoCardProps {
  title: string;
  value: string;
}

export default function InfoCard({ title, value }: InfoCardProps) {
  return(
    <S.Container>
      <Typography font='medium16' color='infoCardTitle' children={title} />
      <Typography font='bold20' color='defaultGreen' children={value} />
    </S.Container>
  )
}