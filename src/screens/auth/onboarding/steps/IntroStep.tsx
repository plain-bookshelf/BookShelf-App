import ContentLayout from "@/components/auth/authLayout/AuthStepComponentLayout/ContentLayout";
import Typography from "@/components/common/typography/Typography";
import { View } from "react-native";

export default function IntroStep() {
  return(
    <ContentLayout>
      <View>
        <Typography children='시작하기' font='medium28' color='defaultBlack' />
        <View>
          <Typography children='책마루의 간단한 설문조사에요!' font='regular18' color='labelGray' />
          <Typography children='취향에 맞는 도서를 추천하기 위한 단계에요.' font='regular18' color='labelGray' />
        </View>
      </View>
    </ContentLayout>
  )
}