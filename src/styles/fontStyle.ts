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
    fontWeight: 700;
  `,
  bold22: `
    fontFamily: ${PRETENDARD.bold};
    fontSize: 22;
    fontWeight: 700;
  `,
  bold20: `
    fontFamily: ${PRETENDARD.bold};
    fontSize: 20;
    fontWeight: 700;
  `,
  bold18: `
    fontFamily: ${PRETENDARD.bold};
    fontSize: 18;
    fontWeight: 700;
  `,
  bold16: `
    fontFamily: ${PRETENDARD.bold};
    fontSize: 16;
    fontWeight: 700;
  `,
  semiBold24: `
    fontFamily: ${PRETENDARD.semiBold};
    fontSize: 24;
    fontWeight: 600;
  `,
  semiBold22: `
    fontFamily: ${PRETENDARD.semiBold};
    fontSize: 22;
    fontWeight: 600;
  `,
  semiBold20: `
    fontFamily: ${PRETENDARD.semiBold};
    fontSize: 20;
    fontWeight: 600;
  `,
  semiBold18: `
    fontFamily: ${PRETENDARD.semiBold};
    fontSize: 18;
    fontWeight: 600;
  `,
  semiBold16: `
    fontFamily: ${PRETENDARD.semiBold};
    fontSize: 16;
    fontWeight: 600;
  `,
  semiBold14: `
    fontFamily: ${PRETENDARD.semiBold};
    fontSize: 14;
    fontWeight: 600;
  `,
  semiBold12: `
    fontFamily: ${PRETENDARD.semiBold};
    fontSize: 12;
    fontWeight: 600;
  `,

  medium28: `
    fontFamily: ${PRETENDARD.medium};
    fontSize: 28;
    fontWeight: 500;
  `,

  medium24: `
    fontFamily: ${PRETENDARD.medium};
    fontSize: 24;
    fontWeight: 500;
  `,
  medium20: `
    fontFamily: ${PRETENDARD.medium};
    fontSize: 20;
    fontWeight: 500;
  `,
  medium18: `
    fontFamily: ${PRETENDARD.medium};
    fontSize: 18;
    fontWeight: 500;
  `,
  medium16: `
    fontFamily: ${PRETENDARD.medium};
    fontSize: 16;
    fontWeight: 500;
  `,
  medium14: `
    fontFamily: ${PRETENDARD.medium};
    fontSize: 14;
    fontWeight: 500;
  `,
  medium12: `
    fontFamily: ${PRETENDARD.medium};
    fontSize: 12;
    fontWeight: 500;
  `,

  regular24: `
    fontFamily: ${PRETENDARD.regular};
    fontSize: 24;
    fontWeight: 400;
  `,
  regular20: `
    fontFamily: ${PRETENDARD.regular};
    fontSize: 20;
    fontWeight: 400;
  `,
  regular18: `
    fontFamily: ${PRETENDARD.regular};
    fontSize: 18;
    fontWeight: 400;
  `,
  regular16: `
    fontFamily: ${PRETENDARD.regular};
    fontSize: 16;
    fontWeight: 400;
  `,
  regular14: `
    fontFamily: ${PRETENDARD.regular};
    fontSize: 14;
    fontWeight: 400;
  `,
  regular12: `
    fontFamily: ${PRETENDARD.regular};
    fontSize: 12;
    fontWeight: 400;
  `,

  tjMedium24: `
    fontFamily: ${TJ.medium};
    fontSize: 24;
    fontWeight: 400;
  `,
  tjMedium20: `
    fontFamily: ${TJ.medium};
    fontSize: 20;
    fontWeight: 400;
  `,
  tjMedium18: `
    fontFamily: ${TJ.medium};
    fontSize: 18;
    fontWeight: 400;
  `,
  tjMedium16: `
    fontFamily: ${TJ.medium};
    fontSize: 16;
    fontWeight: 400;
  `,
  tjMedium14: `
    fontFamily: ${TJ.medium};
    fontSize: 14;
    fontWeight: 400;
  `,
  tjMedium12: `
    fontFamily: ${TJ.medium};
    fontSize: 12;
    fontWeight: 400;
  `,

  tjBold24: `
    fontFamily: ${TJ.bold};
    fontSize: 24;
    fontWeight: 700;
  `,
  tjBold20: `
    fontFamily: ${TJ.bold};
    fontSize: 20;
    fontWeight: 700;
  `,
  tjBold18: `
    fontFamily: ${TJ.bold};
    fontSize: 18;
    fontWeight: 700;
  `,
  tjBold16: `
    fontFamily: ${TJ.bold};
    fontSize: 16;
    fontWeight: 700;
  `,
  tjBold14: `
    fontFamily: ${TJ.bold};
    fontSize: 14;
    fontWeight: 700;
  `,
  tjBold12: `
    fontFamily: ${TJ.bold};
    fontSize: 12;
    fontWeight: 700;
  `,
} as const

/** props에 따라 색상이 변해야 할 땐 FontKey 사용 */
export type FontKey = keyof typeof fontStyle;