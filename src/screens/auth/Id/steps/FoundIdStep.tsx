import Typography from "@/components/common/typography/Typography"
import ContentLayout from '@/components/layout/authLayout/AuthStepComponentLayout/ContentLayout';
import { useState } from "react";
import { View } from "react-native";

export default function FoundIdStep() {
  const [Id, setId] = useState('bookmaru')

  return(
    <ContentLayout>
      <Typography children='찾은 정보' font='medium28' color='defaultBlack' />
      <Typography children='아이디를 잃어버리셨나요?' font='regular18' color='labelGray' />
      <View style={{ paddingTop: 20 }}>
        <Typography children={`아이디 : ${Id}`} font='semiBold18' color='defaultBlack' />
      </View>
    </ContentLayout>
  )
}