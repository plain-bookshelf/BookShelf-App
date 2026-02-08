import styled from "@emotion/native";
import ContentLayout from "@/components/auth/authLayout/AuthStepComponentLayout/ContentLayout";
import Typography from "@/components/common/typography/Typography";
import GenreButton from "@/components/auth/genreButton/GenreButton";
import { useEffect, useState } from "react";

interface GenreSelectionStepProps {
  setIsStepValid: (isStepValid: boolean) => void;
}

export default function GenreSelectionStep({ setIsStepValid }: GenreSelectionStepProps) {
  const [genres, setGenres] = useState({
    '공포': false,
    '추리': false,
    '판타지': false,
    '로맨스': false,
    '인문•사회': false,
    '자연•과학': false,
    '실용•예술': false,
    '에세이': false,
    '언어': false,
  });

  const genreEntries = Object.entries(genres);

  const genreGrid = [
    genreEntries.slice(0, 3),
    genreEntries.slice(3, 6),
    genreEntries.slice(6),
  ];

  const toggleGenre = (genre: keyof typeof genres) => {
    setGenres(prev => ({
      ...prev,
      [genre]: !prev[genre],
    }));
  };

  useEffect(() => {
    const hasSelected = Object.values(genres).some(Boolean);
    setIsStepValid(hasSelected);
  }, [genres]);

  return(
    <ContentLayout>
        <Typography children='어떤 장르의 책을 좋아하나요?' font='medium28' color='defaultBlack' />
        <Typography children='몇 가지만 알려주면 맞춤 책을 준비할게요' font='regular18' color='labelGray' />

        <GenresButtonContainer>
          {genreGrid.map((e, boxIndex) => {
            return(
              <GenresButtonBox key={boxIndex} >
                {e.map(([ genre, isSelected ]) => {
                  return(
                    <GenreButton
                      genre={genre}
                      isSelected={isSelected}
                      onPress={() => toggleGenre(genre as keyof typeof genres)}
                      key={genre}
                    />
                  )
                })}
              </GenresButtonBox>
            )
          })}
        </GenresButtonContainer>
    </ContentLayout>
  )
}

const GenresButtonBox = styled.View`
  flex-direction: row;
  justify-content: center;
  gap: 16px;
`

const GenresButtonContainer = styled.View`
  gap: 12px;
  padding-top: 23px;
`