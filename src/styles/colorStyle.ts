/** 공통 colorStyle */
export const colorStyle = {
  defaultWhite: "#FFFFFF",
  defaultBlack: "#000000",
  defaultRed: "#FF6161",
  defaultGreen: "#00C471",
  defaultGray: "#B5B5B5",
  rankYellow: "#FFE356",
  rankGray: "#BFC1CC",
  rankCopper: "#E3AB41",
  whiteBackground: "#FDFDFD",
  chatBackground: "#EAEAEA",
  appBarGray: "#A7A7A7",
  inputBarGray: "#F4F4F4",
  ButtonBackgroundGray: "#F5F5F5",
  darkGreen: "#00AA62",
  
} as const;

/** props에 따라 색상이 변해야 할 땐 ColorKey 사용 */
export type ColorKey = keyof typeof colorStyle;