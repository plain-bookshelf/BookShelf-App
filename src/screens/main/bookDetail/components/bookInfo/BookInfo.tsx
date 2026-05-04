import { Image, ImageSourcePropType, Pressable } from "react-native";
import { useState } from "react";
import * as S from "./style";
import Typography from "@/components/common/typography/Typography";
import btn_isLiked_false from "@/assets/btn_isLiked_false.png";
import btn_isLiked_true from "@/assets/btn_isLiked_true.png";
import { colorStyle } from "@/styles/colorStyle";
import { BookLikeResponse } from "@/types/bookLike/bookLike";
import { UseMutationResult } from "@tanstack/react-query";

interface BookInfoProps {
  title: string;
  story: string;
  author: string;
  publisher: string;
  holSchool: string;
  publicationDate: string;
  image: ImageSourcePropType;
  isLiked: boolean;
  bookId: number;
  BookLikeMutation: UseMutationResult<BookLikeResponse, Error, number>;
  BookUnlikeMutation: UseMutationResult<BookLikeResponse, Error, number>;
}

export default function BookInfo({ title, story, author, publisher, holSchool, publicationDate, image, isLiked, bookId, BookLikeMutation, BookUnlikeMutation }: BookInfoProps) {
  const [showFullStory, setShowFullStory] = useState<boolean>(story.length < 200);

  const handleBookLike = () => {
    if (isLiked) {
      BookUnlikeMutation.mutate(bookId);
      return;
    }

    BookLikeMutation.mutate(bookId);
  };

  return (
    <S.Container>
      <S.BookInfoTextBox>
        <Typography font='medium24' color='defaultBlack' children={title} />
        <Typography font='regular18' color='bookInfoGray' children={`${author} • ${publisher}`} />
        <Typography font='regular18' color='bookInfoGray' children={`${holSchool} • ${publicationDate}`} />
      </S.BookInfoTextBox>

      <S.BookImageBox>
        <Image source={image} style={{ width: 200, height: 289, position: "absolute", top: 0, left: 0 }} />
        <Pressable onPress={handleBookLike} style={{ position: "absolute", top: 12, right: 12 }}>
          <Image source={isLiked ? btn_isLiked_true : btn_isLiked_false} style={{ width: 20, height: 20 }} />
        </Pressable>
      </S.BookImageBox>

      <S.StoryBox showFullStory={showFullStory}>
        <Typography font='medium20' color='defaultBlack' children='줄거리' />
        <Typography font='regular16' color='bookStoryGray' children={story} numberOfLines={showFullStory ? undefined : 7} />
        {!showFullStory && <S.BlurBox
          pointerEvents="none"
          colors={[`rgba(255, 255, 255, 0)`, `${colorStyle.defaultWhite}`]}
          start={{x: 0, y: -0.7}}
          end={{x: 0, y: 1.5}}
        />}
        {!showFullStory && 
          <S.ShowFullStoryButton onPress={() => setShowFullStory(true)}>
            <Typography font='regular14' color='defaultBlack' children='전체보기' />
          </S.ShowFullStoryButton>
        }
      </S.StoryBox>
    </S.Container>
  )
}