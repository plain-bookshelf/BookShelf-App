import { Modal } from "react-native";
import * as S from "./style";
import Typography from "@/components/common/typography/Typography";

interface DefaultModalProps {
  visible: boolean;
  title: string;
  description?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function DefaultModal({
  visible,
  title,
  description,
  confirmLabel = "확인",
  cancelLabel = "취소",
  onConfirm,
  onCancel,
}: DefaultModalProps) {
  return (
    <Modal
      transparent
      animationType="slide"
      visible={visible}
      onRequestClose={onCancel}
    >
      <S.Backdrop>
        <S.ModalContainer>
          <S.TextBox>
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
          <S.ButtonRow>
            <S.Button onPress={onCancel}>
              <Typography font="medium16" color="defaultBlack" children={cancelLabel} />
            </S.Button>
            <S.Button onPress={onConfirm}>
              <Typography font="medium16" color="modalButtonRed" children={confirmLabel} />
            </S.Button>
          </S.ButtonRow>
        </S.ModalContainer>
      </S.Backdrop>
    </Modal>
  );
}

