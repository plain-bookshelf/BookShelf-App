import { Image, ImageSourcePropType, useWindowDimensions } from "react-native";
import * as S from "./style"
import BookBar from "../bookBar/BookBar";
import Typography from "../typography/Typography";
import { MainNav } from "@/navigation/type";
import { useNavigation } from "@react-navigation/native";

interface BookListProps {
  bookList: {
    id: number;
    image: ImageSourcePropType;
  }[] | [];
}

export default function BookList({ bookList }: BookListProps) {
  const navigation = useNavigation<MainNav>();
  const { width } = useWindowDimensions();

  /* (전체너비 - 좌우패딩 - gap간격) / 3 */
  const imageWidth = (width - 24 * 2 - 16 * 2) / 3;

  const bookGrid = []

  for(let i=0;i<bookList.length;i+=3){
    bookGrid.push(bookList.slice(i, i + 3));
  }
  
  return(
    <S.Container>
      {bookGrid.length > 0 ? bookGrid.map((rowBooks, index) => {
        return(
          <S.BookContainer key={index}>
            <S.BookBox onPress={() => navigation.navigate("BookDetail", { bookId: rowBooks[0].id })}>
              {rowBooks.map((book) => {
                return(
                  <Image key={book.id} source={book.image} resizeMode="contain" style={{ width: imageWidth, aspectRatio: 0.7 }} />
                )
              })}
            </S.BookBox>
            <BookBar />
          </S.BookContainer>
        )
      }) :
      <S.NotFound>
        <Typography children='많고 많은 책 중 원하는 책은 찾지 못했어요' font='regular16' color='appBarGray' />
        <BookBar />
      </S.NotFound>}
    </S.Container>
  )
}