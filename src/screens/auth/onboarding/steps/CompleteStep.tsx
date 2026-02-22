import ContentLayout from "@/components/layout/authLayout/AuthStepComponentLayout/ContentLayout";
import Typography from "@/components/common/typography/Typography";

export default function CompleteStep() {
  return(
    <ContentLayout>
      <>
        <Typography children='이제 시작해볼까요?' font='medium28' color='defaultBlack' />
        <Typography children='이제 책마루를 시작해보세요' font='regular18' color='labelGray' />
      </>
    </ContentLayout>
  )
}