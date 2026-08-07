export type TypographyLevel =
  | "H1"
  | "H2"
  | "H3"
  | "H4"
  | "Accent"
  | "Body"
  | "Caption1"
  | "Caption2";

export const weightTokens = {
  Bold: 700,
  SemiBold: 600,
  Medium: 500,
  Regular: 400,
} as const;

export const typographyTokens = {
  H1: {
    size: "28px",
    weights: weightTokens.Medium,
  },
  H2: {
    size: "24px",
    weights: weightTokens.Medium,
  },
  H3: {
    size: "20px",
    weights: weightTokens.Bold,
  },
  H4: {
    size: "18px",
    weights: weightTokens.Medium,
  },
  Accent: {
    size: "18px",
    weights: weightTokens.SemiBold,
  },
  Body: {
    size: "16px",
    weights: weightTokens.Medium,
  },
  Caption1: {
    size: "14px",
    weights: weightTokens.Medium,
  },
  Caption2: {
    size: "14px",
    weights: weightTokens.Regular,
  },
}