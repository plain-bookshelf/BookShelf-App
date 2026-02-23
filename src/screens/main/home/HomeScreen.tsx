import { Image } from "react-native";
import banner_event_default from "@/assets/banner_event_default.png"
import * as S from "./style"
import Typography from "@/components/common/typography/Typography";
import BookList from "@/components/common/bookList/BookList";

export default function HomeScreen() {
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

  return(
    <S.Container>
      <Image source={banner_event_default} resizeMode="contain" style={{ width: "100%", height: 148 }} />
      <S.TitleBox>
        <Typography children='인기순 책 100권' font='semiBold22' color='defaultBlack' />
      </S.TitleBox>
      <S.BookListBox>
        <BookList bookList={MOCK_BOOKS} />
      </S.BookListBox>
    </S.Container>
  )
}