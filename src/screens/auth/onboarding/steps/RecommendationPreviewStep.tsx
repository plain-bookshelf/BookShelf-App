import styled from "@emotion/native";
import ContentLayout from "@/components/auth/authLayout/AuthStepComponentLayout/ContentLayout";
import Typography from "@/components/common/typography/Typography";
import { Dimensions, Image, ScrollView, useWindowDimensions, View } from "react-native";
import { useState } from "react";
import img_testBook_default from "@/assets/img_test-book_default.png"
import LinearGradient from 'react-native-linear-gradient';
import { colorStyle } from "@/styles/colorStyle";

export default function RecommendationPreviewStep() {
  const [userName, setUserName] = useState('이승현');
  const { width } = useWindowDimensions();

  const imageWidth = (width - 24 * 2 - 16 * 2) / 3; // (전체너비 - 좌우패딩 - gap간격) / 3

  const MOCK_BOOKS = [
    { id: 1, image: img_testBook_default },
    { id: 2, image: img_testBook_default },
    { id: 3, image: img_testBook_default },
    { id: 4, image: img_testBook_default },
    { id: 5, image: img_testBook_default },
    { id: 6, image: img_testBook_default },
    { id: 7, image: img_testBook_default },
    { id: 8, image: img_testBook_default },
    { id: 9, image: img_testBook_default },
    { id: 10, image: img_testBook_default },
    { id: 11, image: img_testBook_default },
    { id: 12, image: img_testBook_default },
    { id: 13, image: img_testBook_default },
    { id: 14, image: img_testBook_default },
    { id: 15, image: img_testBook_default },
    { id: 16, image: img_testBook_default },
    { id: 17, image: img_testBook_default },
    { id: 18, image: img_testBook_default },
  ];

const bookGrid = []

for(let i=0;i<MOCK_BOOKS.length;i+=3){
  bookGrid.push(MOCK_BOOKS.slice(i, i + 3));
}

  return(
    <ContentLayout>
      <Typography children={`${userName}님을 위한 추천 책`} font='medium28' color='defaultBlack' />
      <Typography children={`${userName}님을 위해 이런 책을 준비했어요`} font='regular18' color='labelGray' />

      <ContentContainer>
        {bookGrid.map((rowBooks, index) => {
          return(
            <BookContainer key={index}>
              <BookBox>
                {rowBooks.map((book) => {
                  return(
                    <Image key={book.id} source={book.image} resizeMode="contain" style={{ width: imageWidth, aspectRatio: 0.7 }} />
                  )
                })}
              </BookBox>
              <BookBar />
            </BookContainer>
          )
        })}
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

const ContentContainer = styled.ScrollView`
  flex: 1;
  padding-top: 32px;
`

const BookContainer = styled.View`
`

const BookBar = styled.View`
  margin: 0px -24px;
  width: 100%;
  height: 16px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`

const BookBox = styled.View`
  flex-direction: row;
  gap: 16px;
`

const BlurBox = styled(LinearGradient)`
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 120px;
`