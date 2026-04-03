import img_test_book_default from "@/assets/img_test-book_default.png";
import * as S from "../style";
import BookCard from "../components/bookCard/BookCard";

export default function ReservedScreen() {
  const MOCK_BOOKS = [
    { id: 1, image: img_test_book_default, title: "오늘도 소심한 고양이", day: "03월 15일" },
    { id: 2, image: img_test_book_default, title: "비가 내리는 날 소심한 고양이", day: "03월 15일" },
    { id: 3, image: img_test_book_default, title: "소심한 고양이와 비가 내리는 날", day: "03월 15일" },
    { id: 4, image: img_test_book_default, title: "소심한 고양이와 비가 내리는 날", day: "03월 15일" },
    { id: 5, image: img_test_book_default, title: "소심한 고양이와 비가 내리는 날", day: "03월 15일" },
    { id: 6, image: img_test_book_default, title: "소심한 고양이와 비가 내리는 날", day: "03월 15일" },
    { id: 7, image: img_test_book_default, title: "소심한 고양이와 비가 내리는 날", day: "03월 15일" },
    { id: 8, image: img_test_book_default, title: "소심한 고양이와 비가 내리는 날", day: "03월 15일" },
    { id: 9, image: img_test_book_default, title: "소심한 고양이와 비가 내리는 날", day: "03월 15일" },
    { id: 10, image: img_test_book_default, title: "소심한 고양이와 비가 내리는 날", day: "03월 15일" },
  ];
  return (
    <S.Container>
      <S.BookCardList>
        {MOCK_BOOKS.map((book) => (
          <BookCard
            key={book.id}
            title={book.title}
            info={`${book.day} 예정`}
            image={book.image}
            color="aiTabInactiveGray"
          />
        ))}
      </S.BookCardList>
    </S.Container>
  );
}