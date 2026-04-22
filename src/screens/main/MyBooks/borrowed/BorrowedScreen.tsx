import * as S from "../style";
import BookCard from "../components/bookCard/BookCard";
import { useLendingInfo } from "@/hooks/useLendingInfo";

export default function BorrowedScreen() {
  const { rentalBooks } = useLendingInfo();

  return (
    <S.Container>
      <S.BookCardList>
        {rentalBooks?.map((book) => (
          <BookCard
            key={book.bookAffiliation_id}
            title={book.title}
            info={`${book.left_rental_date}일 남음`}
            image={{ uri: book.book_image }}
            color="defaultGreen"
          />
        ))}
      </S.BookCardList>
    </S.Container>
  );
}