import * as S from "../style";
import BookCard from "../components/bookCard/BookCard";
import { useLendingInfo } from "@/hooks/useLendingInfo";

export default function ReservedScreen() {
  const { reservationBooks } = useLendingInfo();

  return (
    <S.Container>
      <S.BookCardList>
        {reservationBooks?.map((book) => (
          <BookCard
            key={book.bookAffiliation_id}
            title={book.title}
            info={`${book.rank} 예정`}
            image={{ uri: book.book_image }}
            color="aiTabInactiveGray"
          />
        ))}
      </S.BookCardList>
    </S.Container>
  );
}