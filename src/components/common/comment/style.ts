import styled from "@emotion/native";

export const Container = styled.View<{ screen: "bookDetail" | "bookComments" }>`
  flex-direction: row;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
  padding:${({ screen }) => screen === "bookDetail" ? "8px 8px 8px 12px" : "20px 24px"};
`

export const LeftBox = styled.View`
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 8px;
`

export const RightBox = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4px;
`