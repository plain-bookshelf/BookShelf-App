import * as S from "./style";
import ChatCard from "./components/chatCard/ChatCard";
import { useRef, useState } from "react";
import { ScrollView } from "react-native";
import MessageInput from "@/components/common/input/messageInput/MessageInput";
import { useChatbot } from "@/hooks";
import { ChatCardProps } from "@/types";

const TYPING_INTERVAL = 25;

type ChatMessage = ChatCardProps & {
  id: string;
};

export default function ChatbotScreen() {
  const [value, setValue] = useState<string>("");
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatListRef = useRef<ScrollView>(null);
  const { mutate: chatbotMutate, isPending } = useChatbot();

  const animateAiResponse = (answer: string) => {
    const messageId = `ai-${Date.now()}`;
    let index = 0;

    setIsTyping(true);
    setChatHistory((prev) => [...prev, { id: messageId, text: "", who: "ai" }]);

    const timer = setInterval(() => {
      index += 1;

      setChatHistory((prev) =>
        prev.map((message) =>
          message.id === messageId
            ? { ...message, text: answer.slice(0, index) }
            : message
        )
      );

      if (index >= answer.length) {
        clearInterval(timer);
        setIsTyping(false);
      }
    }, TYPING_INTERVAL);
  };

  const onSend = () => {
    const question = value.trim();

    if (!question || isPending || isTyping) {
      return;
    }

    setValue("");
    setChatHistory((prev) => [
      ...prev,
      { id: `user-${Date.now()}`, text: question, who: "user" },
    ]);

    chatbotMutate(question, {
      onSuccess: ({ agent }) => {
        animateAiResponse(agent.answer);
      },
    });
  };

  return (
    <S.Container>
      <S.ChatCardContainer>
        <S.ChatCardList
          ref={chatListRef}
          contentContainerStyle={{ gap: 32 }}
          keyboardDismissMode="on-drag"
          keyboardShouldPersistTaps="handled"
          onContentSizeChange={() => chatListRef.current?.scrollToEnd({ animated: true })}
        >
          {chatHistory.map((item) => (
            <ChatCard key={item.id} text={item.text} who={item.who} />
          ))}
        </S.ChatCardList>
      </S.ChatCardContainer>
      <MessageInput
        backgroundColor="defaultWhite"
        placeholder="질문할 내용을 입력해주세요"
        value={value} onChangeText={setValue}
        onSend={onSend}
        disabled={isPending || isTyping}
      />
    </S.Container>
  );
}
