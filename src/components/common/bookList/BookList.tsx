import { Image, useWindowDimensions } from "react-native";
import * as S from "./style"
import BookBar from "../bookBar/BookBar";
import Typography from "../typography/Typography";
import { MainNav } from "@/navigation/type";
import { useNavigation } from "@react-navigation/native";
import img_book_none from "@/assets/img_test-book_default.png";

interface BookListProps {
  id: number;
  img: string;
}

export default function BookList({ bookList = [] }: { bookList: BookListProps[] }) {
  const navigation = useNavigation<MainNav>();
  const { width } = useWindowDimensions();

  /* (전체너비 - 좌우패딩 - gap간격) / 3 */
  const imageWidth = (width - 24 * 2 - 16 * 2) / 3;
  const imageHeight = imageWidth / 0.7;

  const bookGrid: BookListProps[][] = [];
  /* BookList Grid 형태로 변환 로직 */
  const bookRows = Math.floor(bookList.length / 3);
  const lastRow = bookList.length % 3;
  for (let i = 0; i < bookRows; i++) {
    const row = bookList.slice(i * 3, (i + 1) * 3);
    bookGrid.push(row);
  }
  if (lastRow > 0) {
    const row = bookList.slice(bookRows * 3, bookRows * 3 + lastRow);
    bookGrid.push(row);
  }

  return(
    <S.Container>
      {bookGrid.length > 0 ? bookGrid.map((rowBooks, index) => {
        return(
          <S.BookContainer key={index}>
            <S.BookBox>
              {rowBooks.map((book) => {
                return(
                  <S.BookPressable
                    key={book.id}
                    imageHeight={imageHeight}
                    onPress={() => navigation.navigate("Book", { screen: "BookDetail", params: { bookId: book.id } })}
                  >
                    {book.img === '' ? 
                      <Image source={img_book_none} resizeMode="contain" style={{ width: imageWidth, height: imageHeight }} /> : 
                      <Image source={{ uri: book.img }} style={{ width: imageWidth, height: imageHeight }} />
                    }
                  </S.BookPressable>
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