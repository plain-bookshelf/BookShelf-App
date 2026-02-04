import Typography from "@/components/common/typography/Typography";
import ContentLayout from "../layout/ContentLayout";

export default function CompletionStep() {
  return(
    <ContentLayout>
      <Typography children='회원가입 성공!' font='medium28' color='defaultBlack' />
      <Typography children='이제 책마루에 로그인하고 책마루를 사용해보세요' font='regular18' color='labelGray' />
    </ContentLayout>
  )
}