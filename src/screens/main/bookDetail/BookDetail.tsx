import * as S from "./style";
import { Image, Pressable } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { MainStackParamList, MainNav } from "@/navigation/type";
import btn_go_back_default from "@/assets/btn_previous_main.png";
import Comment from "@/components/common/comment/Comment";
import BookInfo from "@/screens/main/bookDetail/components/bookInfo/BookInfo";
import img_test_book_default from "@/assets/img_test-book_default.png";
import Typography from "@/components/common/typography/Typography";
import { colorStyle } from "@/styles/colorStyle";
import DefaultButton from "@/components/common/button/defaultButton/DefaultButton";
import ReserveButton from "@/components/common/button/reserveButton/ReserveButton";


export default function BookDetail() {
  const COMMENT_MOCK_DATA = [
    { userName: "John Doe", comment: "This is a comment", isLiked: false, likeCount: 0 },
    { userName: "Jane Doe", comment: "This is a comment", isLiked: true, likeCount: 2 },
    { userName: "John Doe", comment: "This is a comment", isLiked: true, likeCount: 5 },
    { userName: "Jane Doe", comment: "This is a comment", isLiked: false, likeCount: 0 },
    { userName: "John Doe", comment: "This is a comment", isLiked: false, likeCount: 1 },
    { userName: "Jane Doe", comment: "This is a comment", isLiked: false, likeCount: 9 },
  ];

  const BOOK_INFO_MOCK_DATA = {
    id: 1,
    status: "borrowed", // borrowed, reserved 열거형으로 처리하면 될듯
    title: "오늘도 소심한 고양이",
    story: "ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇddddddddㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ",
    author: "소심한 고양이",
    publisher: "블루버드",
    holSchool: "홍익대학교",
    publicationDate: "2026.01.01",
    image: img_test_book_default,
    isLiked: false,
  };

  const MOCK_BOOKS = [
    { id: 1, image: img_test_book_default },
    { id: 2, image: img_test_book_default },
    { id: 3, image: img_test_book_default },
    { id: 4, image: img_test_book_default },
    { id: 5, image: img_test_book_default },
    { id: 6, image: img_test_book_default },
    { id: 7, image: img_test_book_default },
    { id: 8, image: img_test_book_default },
    { id: 9, image: img_test_book_default },
    { id: 10, image: img_test_book_default },
  ];

  const navigation = useNavigation<MainNav>();
  const { bookId } = useRoute<RouteProp<MainStackParamList, "BookDetail">>().params;
  const showCommentPreviewOnly = COMMENT_MOCK_DATA.length > 4;

  return (
    <>
      <S.Header>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={btn_go_back_default} style={{ width: 28, height: 28 }} />
        </Pressable>
      </S.Header>

      <S.Container>
        <S.Content>
          <BookInfo title={BOOK_INFO_MOCK_DATA.title} story={BOOK_INFO_MOCK_DATA.story} author={BOOK_INFO_MOCK_DATA.author} publisher={BOOK_INFO_MOCK_DATA.publisher} holSchool={BOOK_INFO_MOCK_DATA.holSchool} publicationDate={BOOK_INFO_MOCK_DATA.publicationDate} image={BOOK_INFO_MOCK_DATA.image} isLiked={BOOK_INFO_MOCK_DATA.isLiked} />
          
          <S.CommentsBox>
            <Typography font="medium20" color="defaultBlack" children="리뷰" />
            <S.CommentList>
              {(showCommentPreviewOnly ? COMMENT_MOCK_DATA.slice(0, 4) : COMMENT_MOCK_DATA).map((comment, index) => (
                <Comment key={index} screen="bookDetail" userName={comment.userName} comment={comment.comment} isLiked={comment.isLiked} likeCount={comment.likeCount} />
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
            {showCommentPreviewOnly && (
              <S.ShowFullStoryButton onPress={() => navigation.navigate("BookComments", { bookId })}>
                <Typography font="regular14" color="defaultBlack" children="전체보기" />
              </S.ShowFullStoryButton>
            )}
          </S.CommentsBox>

          <S.RecommandBookListBox>
            <Typography font="medium20" color="defaultBlack" children="추천" />
            <S.RecommandBookList horizontal>
              {MOCK_BOOKS.map((book) => (
                <S.RecommandBook key={book.id} onPress={() => navigation.navigate("BookDetail", { bookId: book.id })}>
                  <Image source={book.image} style={{ width: 76, height: 110 }} />
                </S.RecommandBook>
              ))}
            </S.RecommandBookList>
          </S.RecommandBookListBox>
        </S.Content>
      </S.Container>
      <S.ActionButtonBox>
      {BOOK_INFO_MOCK_DATA.status === "borrowed" ? (
        <DefaultButton font='semiBold16' label='대여 요청' onPress={() => {}} isValid={true} />
      ) : (
        <ReserveButton font='semiBold16' label='예약' onPress={() => {}} isValid={true} />
      )}
      </S.ActionButtonBox>
    </>
  )
}