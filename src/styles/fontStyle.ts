/** 기본 폰트: Pretendard */
const PRETENDARD = {
  bold: 'Pretendard-Bold',
  semiBold: 'Pretendard-SemiBold',
  medium: 'Pretendard-Medium',
  regular: 'Pretendard-Regular',
} as const;

/** 포인트 폰트: 특정 경우에만 사용 */
const TJ = {
  light: 'TJJoyofsingingL',
  medium: 'TJJoyofsingingM',
  bold: 'TJJoyofsingingB',
  extraBold: 'TJJoyofsingingEB',
} as const;

/** 공통 fontStyle */
export const fontStyle = {
  bold24: `
    fontFamily: ${PRETENDARD.bold};
    fontSize: 24;
  `,
  bold22: `
    fontFamily: ${PRETENDARD.bold};
    fontSize: 22;
  `,
  bold20: `
    fontFamily: ${PRETENDARD.bold};
    fontSize: 20;
  `,
  bold18: `
    fontFamily: ${PRETENDARD.bold};
    fontSize: 18;
  `,
  bold16: `
    fontFamily: ${PRETENDARD.bold};
    fontSize: 16;
  `,
  semiBold24: `
    fontFamily: ${PRETENDARD.semiBold};
    fontSize: 24;
  `,
  semiBold22: `
    fontFamily: ${PRETENDARD.semiBold};
    fontSize: 22;
  `,
  semiBold20: `
    fontFamily: ${PRETENDARD.semiBold};
    fontSize: 20;
  `,
  semiBold18: `
    fontFamily: ${PRETENDARD.semiBold};
    fontSize: 18;
  `,
  semiBold16: `
    fontFamily: ${PRETENDARD.semiBold};
    fontSize: 16;
  `,
  semiBold14: `
    fontFamily: ${PRETENDARD.semiBold};
    fontSize: 14;
  `,
  semiBold12: `
    fontFamily: ${PRETENDARD.semiBold};
    fontSize: 12;
  `,

  medium28: `
    fontFamily: ${PRETENDARD.medium};
    fontSize: 28;
  `,

  medium24: `
    fontFamily: ${PRETENDARD.medium};
    fontSize: 24;
  `,
  medium20: `
    fontFamily: ${PRETENDARD.medium};
    fontSize: 20;
  `,
  medium18: `
    fontFamily: ${PRETENDARD.medium};
    fontSize: 18;
  `,
  medium16: `
    fontFamily: ${PRETENDARD.medium};
    fontSize: 16;
  `,
  medium14: `
    fontFamily: ${PRETENDARD.medium};
    fontSize: 14;
  `,
  medium12: `
    fontFamily: ${PRETENDARD.medium};
    fontSize: 12;
  `,

  regular24: `
    fontFamily: ${PRETENDARD.regular};
    fontSize: 24;
  `,
  regular20: `
    fontFamily: ${PRETENDARD.regular};
    fontSize: 20;
  `,
  regular18: `
    fontFamily: ${PRETENDARD.regular};
    fontSize: 18;
  `,
  regular16: `
    fontFamily: ${PRETENDARD.regular};
    fontSize: 16;
  `,
  regular14: `
    fontFamily: ${PRETENDARD.regular};
    fontSize: 14;
  `,
  regular12: `
    fontFamily: ${PRETENDARD.regular};
    fontSize: 12;
  `,

  tjMedium24: `
    fontFamily: ${TJ.medium};
    fontSize: 24;
  `,
  tjMedium20: `
    fontFamily: ${TJ.medium};
    fontSize: 20;
  `,
  tjMedium18: `
    fontFamily: ${TJ.medium};
    fontSize: 18;
  `,
  tjMedium16: `
    fontFamily: ${TJ.medium};
    fontSize: 16;
  `,
  tjMedium14: `
    fontFamily: ${TJ.medium};
    fontSize: 14;
  `,
  tjMedium12: `
    fontFamily: ${TJ.medium};
    fontSize: 12;
  `,

  tjBold24: `
    fontFamily: ${TJ.bold};
    fontSize: 24;
  `,
  tjBold20: `
    fontFamily: ${TJ.bold};
    fontSize: 20;
  `,
  tjBold18: `
    fontFamily: ${TJ.bold};
    fontSize: 18;
  `,
  tjBold16: `
    fontFamily: ${TJ.bold};
    fontSize: 16;
  `,
  tjBold14: `
    fontFamily: ${TJ.bold};
    fontSize: 14;
  `,
  tjBold12: `
    fontFamily: ${TJ.bold};
    fontSize: 12;
  `,
} as const

/** props에 따라 색상이 변해야 할 땐 FontKey 사용 */
export type FontKey = keyof typeof fontStyle;