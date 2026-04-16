import Typography from "@/components/common/typography/Typography";
import * as S from "./style";

interface AffiliationAutoCompleteProps {
  query: string;
  result: string[];
  onSelect: (value: string) => void;
}

/* 자동완성 검색 결과 하이라이트 처리 함수 */
const highlightParts = (item: string, query: string): { text: string; emphasized: boolean }[] => {
  if (!query) {
    return [{ text: item, emphasized: false }];
  }

  const idx = item.indexOf(query);

  if (idx === -1) {
    return [{ text: item, emphasized: false }];
  }

  const parts: { text: string; emphasized: boolean }[] = [];

  if (idx > 0) {
    parts.push({ text: item.slice(0, idx), emphasized: false });
  }

  parts.push({ text: item.slice(idx, idx + query.length), emphasized: true });

  if (idx + query.length < item.length) {
    parts.push({ text: item.slice(idx + query.length), emphasized: false });
  }

  return parts;
}

export default function AffiliationAutoComplete({ query, result, onSelect }: AffiliationAutoCompleteProps) {
  if (result.length === 0) return null;

  return (
    <S.Container>
      {result.map((item) => (
        <S.AutocompleteItem key={item} onPress={() => onSelect(item)}>
          <S.RowText>
            {highlightParts(item, query).map((part, i) =>
              part.emphasized ? (
                <Typography key={i} font='medium14' color='defaultBlack'>{part.text}</Typography>
              ) : (
                <Typography key={i} font='medium14' color='autoCompleteGray'>{part.text}</Typography>
              ),
            )}
          </S.RowText>
        </S.AutocompleteItem>
      ))}
    </S.Container>
  );
}
