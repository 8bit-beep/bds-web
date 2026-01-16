export type ButtonType = "primary" | "secondary" | "ghost" | "text" | "danger";

export type ButtonSize = "small" | "medium" | "large";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: ButtonType;
  buttonSize?: ButtonSize;
  showIcon?: boolean;
}