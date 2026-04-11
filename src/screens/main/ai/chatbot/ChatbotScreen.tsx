import * as S from "./style";
import ChatCard from "./components/chatCard/ChatCard";
import KeyboardDismiss from "@/components/common/keyboardDismiss/KeyboardDismiss";
import { useState } from "react";
import { ChatCardProps } from "@/types/main/chatbot";
import MessageInput from "@/components/common/input/messageInput/MessageInput";

export default function ChatbotScreen() {
  const [value, setValue] = useState<string>("");

  const MOCK_DATA: ChatCardProps[] = [  
    { text: "안녕하세요! 무엇을 도와드릴까요?", who: "ai" },
    { text: "오늘 읽을 책을 추천받고 싶어요.", who: "user" },
    { text: "어떤 장르를 좋아하시나요?", who: "ai" },
    { text: "요즘은 자기계발서에 관심이 많아요.", who: "user" },
    { text: "그렇다면 『아주 작은 습관의 힘』은 어떠세요?", who: "ai" },
    { text: "그 책은 이미 읽었어요. 다른 책도 있을까요?", who: "user" },
    { text: "『몰입의 즐거움』도 좋은 선택이에요.", who: "ai" },
    { text: "오 재밌어 보이네요. 줄거리도 알려주세요.", who: "user" },
    { text: "집중과 행복에 대한 심리학적 내용을 다루는 책이에요.", who: "ai" },
    { text: "괜찮네요. 이 책으로 읽기 목록에 추가할게요.", who: "user" },
  ];

  return (
    <KeyboardDismiss>
      <S.Container>
        <S.ChatCardContainer>
          <S.ChatCardList contentContainerStyle={{ gap: 32 }}>
            {MOCK_DATA.map((item) => (
              <ChatCard key={item.text} text={item.text} who={item.who} />
            ))}
          </S.ChatCardList>
        </S.ChatCardContainer>
        <MessageInput backgroundColor="defaultWhite" placeholder="질문할 내용을 입력해주세요" value={value} onChangeText={setValue} onSend={() => {setValue("")}} /> {/* TODO: 챗봇 api 연동 */}
      </S.Container>
    </KeyboardDismiss>
  );
}
