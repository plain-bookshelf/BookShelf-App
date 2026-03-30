import { Image, Pressable } from "react-native";
import banner_event_default from "@/assets/banner_event_default.png"
import * as S from "./style"
import Typography from "@/components/common/typography/Typography";
import BookList from "@/components/common/bookList/BookList";
import btn_next_type_books_arrow_default from "@/assets/btn_next-type-books-arrow-right_default.png"
import { useState } from "react";

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

  const [isPopularBooks, setIsPopularBooks] = useState(true);
  const [popularBooks, setPopularBooks] = useState(MOCK_BOOKS);
  const [latestBooks, setLatestBooks] = useState(MOCK_BOOKS);

  return(
    <S.Container>
      <Image source={banner_event_default} resizeMode="contain" style={{ width: "100%", height: 148 }} />
      <S.TitleBox isPopularBooks={isPopularBooks}>
        <Pressable onPress={() => setIsPopularBooks(true)}>
          {!isPopularBooks && <Image source={btn_next_type_books_arrow_default} style={{ width: 28, height: 28, transform: [{ rotate: "180deg" }] }} />}  
        </Pressable>
        <Typography children={`${isPopularBooks ? "인기순" : "최신순"} 책 100권`} font='semiBold22' color='defaultBlack' />
        <Pressable onPress={() => setIsPopularBooks(false)}>
          {isPopularBooks && <Image source={btn_next_type_books_arrow_default} style={{ width: 28, height: 28 }} />}
        </Pressable>
      </S.TitleBox>
      <BookList bookList={isPopularBooks ? popularBooks : latestBooks} />
    </S.Container>
  )
}