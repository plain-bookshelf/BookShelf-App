import { Modal } from "react-native";
import * as S from "./style";
import Typography from "@/components/common/typography/Typography";
import styled from "@emotion/native";
import { colorStyle } from "@/styles/colorStyle";
import { useState } from "react";

interface WithdrawalModalProps {
  visible: boolean;
  title: string;
  description?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function WithdrawalModal({
  visible,
  title,
  description,
  confirmLabel = "확인",
  cancelLabel = "취소",
  onConfirm,
  onCancel,
}: WithdrawalModalProps) {
  const [value, setValue] = useState<string>("");

  return (
    <Modal
      transparent
      animationType="slide"
      visible={visible}
      onRequestClose={onCancel}
    >
      <S.Backdrop>
        <S.ModalContainer>
          <S.TextBox padding="32px 0px 16px">
            <Typography font="bold20" color="defaultBlack" children={title} />
            {description ? (
              <Typography
                font="regular16"
                color="defaultBlack"
                textAlign="center"
                children={description}
              />
            ) : null}
          </S.TextBox>
          <InputBox>
            <Input placeholder="동의합니다" value={value} onChangeText={setValue} placeholderTextColor={colorStyle.resendText} />
          </InputBox>
          <S.ButtonRow>
            <S.Button onPress={onCancel}>
              <Typography font="medium16" color="defaultBlack" children={cancelLabel} />
            </S.Button>
            <S.Button onPress={onConfirm} disabled={value !== "동의합니다"}>
              <Typography font="medium16" color={value !== "동의합니다" ? "disabledGray" : "modalButtonRed"} children={confirmLabel} />
            </S.Button>
          </S.ButtonRow>
        </S.ModalContainer>
      </S.Backdrop>
    </Modal>
  );
}

const InputBox = styled.View`
  width: 100%;
  padding: 0px 24px 30px;
`;

const Input = styled.TextInput`
  width: 100%;
  height: 48px;
  border-radius: 8px;
  padding-left: 20px;
  flex-direction: row;
  align-items: center;
  background-color: ${colorStyle.modalInputBackgroundGray};
`;