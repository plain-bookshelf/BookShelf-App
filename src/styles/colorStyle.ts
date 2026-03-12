/* 공통 colorStyle */
export const colorStyle = {
  defaultWhite: "#FFFFFF",
  defaultBlack: "#000000",
  defaultRed: "#FF6161",
  defaultGreen: "#00C471",
  defaultGray: "#B5B5B5",
  rankYellow: "#FFE356",
  rankGray: "#BFC1CC",
  rankCopper: "#E3AB41",
  appBarGray: "#A7A7A7",
  inputBarGray: "#F4F4F4",
  ButtonBackgroundGray: "#F5F5F5",
  darkGreen: "#00AA62",
  timerRed: "#FF4E4E",
  labelGray: "#777777",
  recommandIdBackground: "#262626",
  recommandIdText: "#C1C1C1",
  resend: "#FF4444",
  resendText: "#868686",
  lineGray: "#C8C8C8",
  socialLoginTitle: "#737373",
  socialLoginBorder: "#A4A4A4",
  genreBackgroundGray: "#ECECEC",
  infoCardTitle: "#7B7B7B",
  profileBackgroundGray: "#FAFAFA",
  logoutRed: "#FF4B4B",
  aiTabInactiveGray: "#888888",
  modalButtonRed: "#FF5959",
} as const;

/* props에 따라 색상이 변해야 할 땐 ColorKey 사용 */
export type ColorKey = keyof typeof colorStyle;