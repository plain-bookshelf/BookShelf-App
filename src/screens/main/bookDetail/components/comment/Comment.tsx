import * as S from "./style";
import Typography from "@/components/common/typography/Typography";
import { Image, Pressable } from "react-native";
import btn_comment_isLiked_false from "@/assets/btn_comment-isLiked-false.png";
import btn_comment_isLiked_true from "@/assets/btn_comment-isLiked-true.png";

interface CommentProps {
  userName: string;
  comment: string;
  isLiked: boolean;
  likeCount: number;
}

export default function Comment({ userName, comment, isLiked, likeCount }: CommentProps) {
  return (
    <S.Container>
      <S.LeftBox>
        <Typography font="semiBold16" color="defaultBlack" children={userName} />
        <Typography font="regular14" color="defaultBlack" children={comment} />
      </S.LeftBox>
      <S.RightBox>
        {likeCount > 0 && (
        <Pressable onPress={() => {}}>
          <Typography font="medium16" color="commentLikeCountGray" children={likeCount.toString()} />
        </Pressable>
        )}
        <Image source={isLiked ? btn_comment_isLiked_true : btn_comment_isLiked_false} style={{ width: 20, height: 20 }} />
      </S.RightBox>
    </S.Container>
  )
}