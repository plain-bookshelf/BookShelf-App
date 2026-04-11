import * as S from "./style";
import Typography from "@/components/common/typography/Typography";
import { Image, Pressable } from "react-native";
import btn_isLiked_false from "@/assets/btn_isLiked_false.png";
import btn_isLiked_true from "@/assets/btn_isLiked_true.png";

interface CommentProps {
  screen: "bookDetail" | "bookComments";
  userName: string;
  comment: string;
  isLiked: boolean;
  likeCount: number;
}

export default function Comment({ screen, userName, comment, isLiked, likeCount }: CommentProps) {
  return (
    <S.Container screen={screen}>
      <S.LeftBox>
        <Typography font={screen === "bookDetail" ? "semiBold16" : "semiBold18"} color="defaultBlack" children={userName} />
        <Typography font={screen === "bookDetail" ? "regular14" : "regular16"} color="defaultBlack" children={comment} />
      </S.LeftBox>
      <S.RightBox>
        {likeCount > 0 && (
        <Pressable onPress={() => {}}>
          <Typography font="medium16" color="commentLikeCountGray" children={likeCount.toString()} />
        </Pressable>
        )}
        <Image source={isLiked ? btn_isLiked_true : btn_isLiked_false} style={{ width: 20, height: 20 }} />
      </S.RightBox>
    </S.Container>
  )
}