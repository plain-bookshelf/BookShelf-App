import { useEffect, useState } from "react";
import SearchBar from "./components/searchBar/SearchBar";
import BookList from "@/components/common/bookList/BookList";
import * as S from "./style";
import { useBookSearch } from "@/hooks";

export default function SearchScreen() {
  const [value, setValue] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');
  const { books } = useBookSearch(debouncedValue);
  const hasKeyword = debouncedValue.trim().length > 0;
  const debounceTime = 150; /* 디바운스 시간 */

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      setDebouncedValue(value);
    }, debounceTime);

    return () => clearTimeout(debounceTimer);
  }, [value]);

  return(
    <S.Container>
      <SearchBar placeholder='원하는 책의 이름이나 저자를 찾아보세요' value={value} onChangeText={setValue} />
      {hasKeyword && <BookList bookList={books.map((book) => ({ id: book.book_affiliation_id, img: book.book_image }))} />}
    </S.Container>
  )  
}