import styled from "@emotion/native";
import ContentLayout from "@/components/auth/authLayout/AuthStepComponentLayout/ContentLayout";
import Typography from "@/components/common/typography/Typography";
import { useState } from "react";
import img_testBook_default from "@/assets/img_test-book_default.png"
import LinearGradient from 'react-native-linear-gradient';
import { colorStyle } from "@/styles/colorStyle";
import BookList from "@/components/common/bookBar/BookList";

export default function RecommendationPreviewStep() {
  const [userName, setUserName] = useState('이승현');

  const MOCK_BOOKS = [
    { id: 1, image: require("@/assets/img_test-book_default.png") },
    { id: 2, image: require("@/assets/img_test-book_default.png") },
    { id: 3, image: require("@/assets/img_test-book_default.png") },
    { id: 4, image: require("@/assets/img_test-book_default.png") },
    { id: 5, image: require("@/assets/img_test-book_default.png") },
    { id: 6, image: require("@/assets/img_test-book_default.png") },
    { id: 7, image: require("@/assets/img_test-book_default.png") },
    { id: 8, image: require("@/assets/img_test-book_default.png") },
    { id: 9, image: require("@/assets/img_test-book_default.png") },
    { id: 10, image: require("@/assets/img_test-book_default.png") },
    { id: 11, image: require("@/assets/img_test-book_default.png") },
    { id: 12, image: require("@/assets/img_test-book_default.png") },
    { id: 13, image: require("@/assets/img_test-book_default.png") },
    { id: 14, image: require("@/assets/img_test-book_default.png") },
    { id: 15, image: require("@/assets/img_test-book_default.png") },
    { id: 16, image: require("@/assets/img_test-book_default.png") },
    { id: 17, image: require("@/assets/img_test-book_default.png") },
    { id: 18, image: require("@/assets/img_test-book_default.png") },
  ];

  const bookGrid = []

  for(let i=0;i<MOCK_BOOKS.length;i+=3){
    bookGrid.push(MOCK_BOOKS.slice(i, i + 3));
  }

  return(
    <ContentLayout>
      <TitleBox>
        <Typography children={`${userName}님을 위한 추천 책`} font='medium28' color='defaultBlack' />
        <Typography children={`${userName}님을 위해 이런 책을 준비했어요`} font='regular18' color='labelGray' />
      </TitleBox>

      <ContentContainer>
        <BookList bookList={MOCK_BOOKS} />
      </ContentContainer>
      <BlurBox
        pointerEvents="none"
        colors={[`rgba(255, 255, 255, 0)`, `${colorStyle.defaultWhite}`]}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
      />
    </ContentLayout>
  )
}

const TitleBox = styled.View`
  padding: 36px 24px 0px;
  gap: 8px;
`

const ContentContainer = styled.ScrollView`
  flex: 1;
  padding-top: 32px;
`

const BlurBox = styled(LinearGradient)`
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 120px;
`