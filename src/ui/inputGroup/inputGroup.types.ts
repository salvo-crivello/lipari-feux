import {
  ElementType,
  HTMLAttributes,
  HtmlHTMLAttributes,
  InputHTMLAttributes,
} from "react";
import {
  inputGroupVariants,
  inputLabelVariants,
  inputMessageVariants,
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

type TInputTextareaVariants = VariantProps<typeof inputTextVariants>;
type TInputTextareaProps = InputHTMLAttributes<HTMLTextAreaElement>;
type TInputTextarea = TInputTextareaProps & TInputTextareaVariants;

// ====================================================

type TInputPasswordVariants = VariantProps<typeof inputTextVariants>;
type TInputPasswordProps = InputHTMLAttributes<HTMLInputElement>;
type TInputPassword = TInputPasswordProps & TInputPasswordVariants;

// ====================================================

type TInputMessageVariants = VariantProps<typeof inputMessageVariants>;
type TInputMessageProps = HTMLAttributes<HTMLSpanElement>;
type TInputMessage = TInputMessageProps & TInputMessageVariants;

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
  TInputTextareaVariants,
  TInputTextareaProps,
  TInputTextarea,
  TInputPasswordVariants,
  TInputPasswordProps,
  TInputPassword,
  TInputMessageVariants,
  TInputMessageProps,
  TInputMessage,
};
