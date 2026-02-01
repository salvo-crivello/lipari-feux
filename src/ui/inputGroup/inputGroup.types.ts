import { ElementType, HtmlHTMLAttributes, InputHTMLAttributes } from "react";
import {
  inputGroupVariants,
  inputLabelVariants,
  inputTextVariants,
} from "./inputGroup.styles";
import { VariantProps } from "class-variance-authority";

type TInputGroupVariants = VariantProps<typeof inputGroupVariants>;
type TInputGroupProps = {
  readonly?: boolean;
  required?: boolean;
  orientation?: "horizontal" | "vertical";
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary";
  className?: HtmlHTMLAttributes<HTMLDivElement>["className"];
};
type TInputGroup = TInputGroupProps & TInputGroupVariants;

// ====================================================

type TInputLabelVariants = VariantProps<typeof inputLabelVariants>;
type TInputLabelProps = HtmlHTMLAttributes<HTMLLabelElement>;
type TInputLabel = TInputLabelProps & TInputLabelVariants;

// ====================================================

type TInputTextVariants = VariantProps<typeof inputTextVariants>;
type TInputTextProps = InputHTMLAttributes<HTMLInputElement> & {
  icon?: ElementType;
  iconPos?: "left" | "right" | undefined;
};
type TInputText = TInputTextProps & TInputTextVariants;

// ====================================================

export type {
  TInputGroup,
  TInputGroupProps,
  TInputGroupVariants,
  TInputLabelProps,
  TInputLabel,
  TInputTextVariants,
  TInputTextProps,
  TInputText,
};
