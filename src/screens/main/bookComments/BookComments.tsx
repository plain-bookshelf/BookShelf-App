import * as S from "./style";
import { Image, Pressable } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MainStackParamList } from "@/navigation/type";
import btn_go_back_default from "@/assets/btn_previous_main.png";
import Comment from "@/components/common/comment/Comment";
import MessageInput from "@/components/common/input/messageInput/MessageInput";
import { useState } from "react";

const COMMENT_MOCK_DATA = [
  { userName: "John Doe", comment: "This is a comment", isLiked: false, likeCount: 0 },
  { userName: "Jane Doe", comment: "This is a comment", isLiked: true, likeCount: 2 },
  { userName: "John Doe", comment: "This is a comment", isLiked: true, likeCount: 5 },
  { userName: "Jane Doe", comment: "This is a comment", isLiked: false, likeCount: 0 },
  { userName: "John Doe", comment: "This is a comment", isLiked: false, likeCount: 1 },
  { userName: "Jane Doe", comment: "This is a comment", isLiked: false, likeCount: 9 },
  { userName: "John Doe", comment: "This is a comment", isLiked: false, likeCount: 0 },
  { userName: "Jane Doe", comment: "This is a comment", isLiked: false, likeCount: 0 },
  { userName: "John Doe", comment: "This is a comment", isLiked: false, likeCount: 0 },
  { userName: "Jane Doe", comment: "This is a comment", isLiked: false, likeCount: 0 },
  { userName: "John Doe", comment: "This is a comment", isLiked: false, likeCount: 0 },
  { userName: "Jane Doe", comment: "This is a comment", isLiked: false, likeCount: 0 },
];

type BookCommentsNav = NativeStackNavigationProp<MainStackParamList, "BookComments">;
type BookCommentsRoute = RouteProp<MainStackParamList, "BookComments">;

export default function BookComments() {
  const [value, setValue] = useState<string>(""); 
  const [isFocused, setIsFocused] = useState(false);
  const navigation = useNavigation<BookCommentsNav>();

  return (
    <>
      <S.Header>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={btn_go_back_default} style={{ width: 28, height: 28 }} />
        </Pressable>
      </S.Header>

      <S.Container>
        <S.Content>
          {COMMENT_MOCK_DATA.map((item, comment) => (
            <Comment
              key={comment}
              screen="bookComments"
              userName={item.userName}
              comment={item.comment}
              isLiked={item.isLiked}
              likeCount={item.likeCount}
            />
          ))}
        </S.Content>
      </S.Container>
      <S.MessageInputBox isFocused={isFocused}>
        <MessageInput backgroundColor="bookCommentsBackgroundGray" placeholder="댓글을 입력해주세요" value={value} onChangeText={setValue} onSend={() => {setValue("")}} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} />
      </S.MessageInputBox>
      {isFocused && <S.backgroundBlur onPress={() => setIsFocused(false)} />}
    </>
  );
}
