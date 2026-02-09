import Typography from "@/components/common/typography/Typography";
import { GenreButtonBox } from "./style";

interface GenreButtonProps {
  isSelected: boolean;
  genre: string;
  onPress: () => void
}

export default function GenreButton({ isSelected, genre, onPress }: GenreButtonProps) {

  return(
    <GenreButtonBox isSelected={isSelected} onPress={onPress} >
      <Typography children={genre} font='medium16' color='defaultBlack' />
    </GenreButtonBox>
  )
}