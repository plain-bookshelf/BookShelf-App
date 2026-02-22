/** 공통 fontStyle */
export const fontStyle = {
  semiBold24: `
    font-size: 24px;
    font-weight: 600;
  `,
  semiBold22: `
    font-size: 22px;
    font-weight: 600;
  `,
  semiBold20: `
    font-size: 20px;
    font-weight: 600;
  `,
  semiBold18: `
    font-size: 18px;
    font-weight: 600;
  `,
  semiBold16: `
    font-size: 16px;
    font-weight: 600;
  `,
  semiBold14: `
    font-size: 14px;
    font-weight: 600;
  `,
  semiBold12: `
    font-size: 12px;
    font-weight: 600;
  `,

  medium28: `
    font-size: 28px;
    font-weight: 500;
  `,

  medium24: `
    font-size: 24px;
    font-weight: 500;
  `,
  medium20: `
    font-size: 20px;
    font-weight: 500;
  `,
  medium18: `
    font-size: 18px;
    font-weight: 500;
  `,
  medium16: `
    font-size: 16px;
    font-weight: 500;
  `,
  medium14: `
    font-size: 14px;
    font-weight: 500;
  `,
  medium12: `
    font-size: 12px;
    font-weight: 500;
  `,

  regular24: `
    font-size: 24px;
    font-weight: 400;
  `,
  regular20: `
    font-size: 20px;
    font-weight: 400;
  `,
  regular18: `
    font-size: 18px;
    font-weight: 400;
  `,
  regular16: `
    font-size: 16px;
    font-weight: 400;
  `,
  regular14: `
    font-size: 14px;
    font-weight: 400;
  `,
  regular12: `
    font-size: 12px;
    font-weight: 400;
  `,
} as const

/** props에 따라 색상이 변해야 할 땐 FontKey 사용 */
export type FontKey = keyof typeof fontStyle;