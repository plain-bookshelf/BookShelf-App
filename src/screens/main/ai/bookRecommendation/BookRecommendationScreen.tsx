import BookList from "@/components/common/bookList/BookList";
import * as S from "./style";
import Typography from "@/components/common/typography/Typography";
import { useState } from "react";
import { useRecommandBooks } from "@/hooks/useRecommandBooks";

export default function BookRecommendationScreen() {
  const [userName, setUserName] = useState('이름');

  const { data } = useRecommandBooks();
  
  return (
    <S.Container>
      <S.TitleBox>
        <Typography font="medium28" color="defaultBlack" children={`${userName}님을 위한 추천 책`} />
        <Typography font="regular18" color="labelGray" children={`${userName}님을 위해 이런 책을 준비했어요`} />
      </S.TitleBox>
      <BookList bookList={data?.books} />
    </S.Container>
  )
}
