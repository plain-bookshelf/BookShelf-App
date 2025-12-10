/** 공통 fontStyle */
export const fontStyle = {
  semiBold24: {
    size: "24px",
    weight: 600
  },
  semiBold20: {
    size: "20px",
    weight: 600
  },
  semiBold18: {
    size: "18px",
    weight: 600
  },
  semiBold16: {
    size: "16px",
    weight: 600
  },
  semiBold14: {
    size: "14px",
    weight: 600
  },
  semiBold12: {
    size: "12px",
    weight: 600
  },
  medium24: {
    size: "24px",
    weight: 500
  },
  medium20: {
    size: "20px",
    weight: 500
  },
  medium18: {
    size: "18px",
    weight: 500
  },
  medium16: {
    size: "16px",
    weight: 500
  },
  medium14: {
    size: "14px",
    weight: 500
  },
  medium12: {
    size: "12px",
    weight: 500
  },
  regular24: {
    size: "24px",
    weight: 400
  },
  regular20: {
    size: "20px",
    weight: 400
  },
  regular18: {
    size: "18px",
    weight: 400
  },
  regular16: {
    size: "16px",
    weight: 400
  },
  regular14: {
    size: "14px",
    weight: 400
  },
  regular12: {
    size: "12px",
    weight: 400
  },
}

/** props에 따라 색상이 변해야 할 땐 ColorKey 사용 */
export type FontKey = keyof typeof fontStyle;