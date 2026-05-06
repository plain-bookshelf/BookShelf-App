import BookList from "@/components/common/bookList/BookList";
import * as S from "./style";
import Typography from "@/components/common/typography/Typography";
import { useState } from "react";
import { useRecommandBooks } from "@/hooks/useRecommandBooks";
import useUserStore from "@/store/useUserStore";

export default function BookRecommendationScreen() {
  const username = useUserStore((state) => state.user?.username);
  const nickname = useUserStore((state) => state.user?.nickname);

  const { data } = useRecommandBooks();
  
  return (
    <S.Container>
      <S.TitleBox>
        <Typography font="medium28" color="defaultBlack" children={`${nickname}님을 위한 추천 책`} />
        <Typography font="regular18" color="labelGray" children={`${nickname}님을 위해 이런 책을 준비했어요`} />
      </S.TitleBox>
      <BookList bookList={data?.books ?? []} />
    </S.Container>
  )
}
