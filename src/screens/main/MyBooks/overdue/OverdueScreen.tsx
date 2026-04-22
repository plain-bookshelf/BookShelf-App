import * as S from "../style";
import BookCard from "../components/bookCard/BookCard";
import { useLendingInfo } from "@/hooks/useLendingInfo";

export default function OverdueScreen() {
  const { overDueBooks } = useLendingInfo();

  return (
    <S.Container>
      <S.BookCardList>
        {overDueBooks?.map((book) => (
          <BookCard
            key={book.bookAffiliation_id}
            title={book.title}
            info={`${book.overdue_date}일 연체됨`}
            image={{ uri: book.book_image }}
            color="overdueRed"
          />
        ))}
      </S.BookCardList>
    </S.Container>
  );
}