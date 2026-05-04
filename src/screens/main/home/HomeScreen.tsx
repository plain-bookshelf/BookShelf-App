import { Image, Pressable } from "react-native";
import banner_event_default from "@/assets/banner_event_default.png"
import * as S from "./style"
import Typography from "@/components/common/typography/Typography";
import BookList from "@/components/common/bookList/BookList";
import btn_next_type_books_arrow_default from "@/assets/btn_next-type-books-arrow-right_default.png"
import { useState } from "react";
import { useHomeBooks } from "@/hooks/useHomeBooks";

export default function HomeScreen() {
  const { books: popularBooks } = useHomeBooks("POPULAR");
  const { books: recentBooks } = useHomeBooks("RECENT");

  const [isPopularBooks, setIsPopularBooks] = useState(true);

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
      <BookList bookList={isPopularBooks ? popularBooks.map((book) => ({ id: book.id, img: book.book_image })) : recentBooks.map((book) => ({ id: book.id, img: book.book_image }))} />
    </S.Container>
  ) 
}