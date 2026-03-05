import { useState } from "react";
import SearchBar from "./components/searchBar/SearchBar";
import BookList from "@/components/common/bookList/BookList";
import * as S from "./style";

export default function SearchScreen() {
  const [value, setValue] = useState('');

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
      <SearchBar placeholder='원하는 책의 이름이나 저자를 찾아보세요' value={value} onChangeText={setValue} />
      <BookList bookList={MOCK_BOOKS} />
    </S.Container>
  )  
}