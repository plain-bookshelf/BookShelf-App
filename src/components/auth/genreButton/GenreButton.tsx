import Typography from "@/components/common/typography/Typography";
import { GenreButtonBox } from "./style";
import { useState } from "react";

interface GenreButtonProps {
  isSelected: boolean;
  genre: string;
}

export default function GenreButton({ isSelected, genre: Genre }: GenreButtonProps) {
  const [genreIsSelected, SetGenreIsSelected] = useState(isSelected);
  console.log(genreIsSelected)

  return(
    <GenreButtonBox isSelected={genreIsSelected} onPress={() => SetGenreIsSelected(prev => !prev)} >
      <Typography children={Genre} font='medium16' color='defaultBlack' />
    </GenreButtonBox>
  )
}