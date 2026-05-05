import { useState } from "react";
import * as S from "./style";
import { Image, Pressable } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BookStackParamList } from "@/navigation/type";
import btn_go_back_default from "@/assets/btn_previous_main.png";
import Comment from "@/components/common/comment/Comment";
import BookInfo from "@/screens/main/bookDetail/components/bookInfo/BookInfo";
import img_test_book_default from "@/assets/img_test-book_default.png";
import Typography from "@/components/common/typography/Typography";
import { colorStyle } from "@/styles/colorStyle";
import DefaultButton from "@/components/common/button/defaultButton/DefaultButton";
import ReserveButton from "@/components/common/button/reserveButton/ReserveButton";
import { useBookDetail, useBookLike, useCommentLike, useLending, useRecommandBooks } from "@/hooks";
import { useComment } from "@/hooks/useComment";
import CompleteLending from "./components/completeLending/completeLending";


export default function BookDetail() {
  const [completeLendingMessage, setCompleteLendingMessage] = useState("");

  const navigation = useNavigation<NativeStackNavigationProp<BookStackParamList>>();
  const { bookId } = useRoute<RouteProp<BookStackParamList, "BookDetail">>().params;

  const { bookDetail } = useBookDetail(bookId);
  const bookInfo = bookDetail?.book_info;
  const { BookLikeMutation, BookUnlikeMutation } = useBookLike();

  const { commentData } = useComment(bookId);
  const comments = commentData?.content;

  const { CommentLikeMutation, CommentUnlikeMutation } = useCommentLike();

  const publicationMonth = bookInfo?.publication_date.split("-")[1][0] === "0" ? bookInfo?.publication_date.split("-")[1][1] : bookInfo?.publication_date.split("-")[1];
  const publicationDay = bookInfo?.publication_date.split("-")[2][0] === "0" ? bookInfo?.publication_date.split("-")[2][1] : bookInfo?.publication_date.split("-")[2];
  const publicationDate = `${publicationMonth}월 ${publicationDay}일`;

  const showCommentPreviewOnly = (comments?.length ?? 0) > 4;

  const { RentalMutation, ReservationMutation } = useLending();
  const isLendingPending = RentalMutation.isPending || ReservationMutation.isPending;

  const handleRental = () => {
    setCompleteLendingMessage("");
    RentalMutation.mutate(bookId, {
      onSuccess: () => setCompleteLendingMessage("대여 요청이 성공적으로 완료되었어요!"),
      onError: () => setCompleteLendingMessage("대여 요청에 실패했어요. 잠시 후 다시 시도해 주세요."),
    });
  };

  const handleReservation = () => {
    setCompleteLendingMessage("");
    ReservationMutation.mutate(bookId, {
      onSuccess: () => setCompleteLendingMessage("예약이 성공적으로 완료되었어요!"),
      onError: () => setCompleteLendingMessage("예약 요청에 실패했어요. 잠시 후 다시 시도해 주세요."),
    });
  };

  const { data: recommandBooks } = useRecommandBooks();
  const recommandBookList = recommandBooks?.books;

  return (
    <>
      <S.Header>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={btn_go_back_default} style={{ width: 28, height: 28 }} />
        </Pressable>
      </S.Header>

      <S.Container>
        <S.Content>
          <BookInfo
            title={bookInfo?.title ?? ""}
            story={bookInfo?.introduction ?? ""}
            author={bookInfo?.author ?? ""}
            publisher={bookInfo?.publisher ?? ""}
            holSchool={bookDetail?.affiliation_name ?? ""}
            publicationDate={publicationDate ?? ""}
            image={bookInfo?.book_image ? { uri: bookInfo.book_image } : img_test_book_default}
            isLiked={bookDetail?.is_liked ?? false}
            bookId={bookId}
            BookLikeMutation={BookLikeMutation}
            BookUnlikeMutation={BookUnlikeMutation} />
          <S.CommentsBox>
            <Typography font="medium20" color="defaultBlack" children="리뷰" />
            <S.CommentList>
              {(showCommentPreviewOnly ? comments?.slice(0, 4) : comments)?.map((comment) => (
                <Comment
                  key={comment?.comment_id}
                  screen="bookDetail"
                  userName={comment?.nickname}
                  comment={comment?.comment}
                  isLiked={false}
                  likeCount={comment?.like_count}
                  commentId={comment?.comment_id}
                  CommentLikeMutation={CommentLikeMutation}
                  CommentUnlikeMutation={CommentUnlikeMutation} />
              ))}
            </S.CommentList>
            {showCommentPreviewOnly && (
              <S.BlurBox
                pointerEvents="none"
                colors={[`rgba(255, 255, 255, 0)`, `${colorStyle.defaultWhite}`]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 0.8 }}
              />
            )}
            <S.ShowFullStoryButton onPress={() => navigation.navigate("BookComments", { bookId })}>
              <Typography font="regular14" color="defaultBlack" children="전체보기" />
            </S.ShowFullStoryButton>
          </S.CommentsBox>

          <S.RecommandBookListBox>
            <Typography font="medium20" color="defaultBlack" children="추천" />
            <S.RecommandBookList horizontal>
              {recommandBookList?.map((book) => (
                <S.RecommandBook key={book.id} onPress={() => navigation.push("BookDetail", { bookId: book.id })}>
                  <Image source={{ uri: book.img }} style={{ width: 76, height: 110 }} />
                </S.RecommandBook>
              ))}
            </S.RecommandBookList>
          </S.RecommandBookListBox>
        </S.Content>
      </S.Container>
      <S.ActionButtonBox>
      {completeLendingMessage && (
        <CompleteLending
          message={completeLendingMessage}
          onClose={() => setCompleteLendingMessage("")}
        />
      )}
      {bookDetail?.is_enable_rental ? (
        <DefaultButton font='semiBold16' label='대여 요청' onPress={handleRental} isValid={!isLendingPending} />
      ) : (
        <ReserveButton font='semiBold16' label='예약' onPress={handleReservation} isValid={!isLendingPending} />
      )}
      </S.ActionButtonBox>
    </>
  )
}