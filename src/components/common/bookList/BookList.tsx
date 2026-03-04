import { Image, Platform, useWindowDimensions } from "react-native";
import * as S from "./style"
import BookBar from "../bookBar/bookBar";

interface BookListProps {
  bookList: {
    id: number;
    image: any;
  }[];
}

export default function BookList({ bookList }: BookListProps) {
  const { width } = useWindowDimensions();

  /* (전체너비 - 좌우패딩 - gap간격) / 3 */
  const imageWidth = (width - 24 * 2 - 16 * 2) / 3;

  const bookGrid = []

  for(let i=0;i<bookList.length;i+=3){
    bookGrid.push(bookList.slice(i, i + 3));
  }
  
  return(
    <S.Container>
      {bookGrid.map((rowBooks, index) => {
        return(
          <S.BookContainer key={index}>
            <S.BookBox>
              {rowBooks.map((book) => {
                return(
                  <Image key={book.id} source={book.image} resizeMode="contain" style={{ width: imageWidth, aspectRatio: 0.7 }} />
                )
              })}
            </S.BookBox>
            <BookBar />
          </S.BookContainer>
        )
      })}
    </S.Container>
  )
}