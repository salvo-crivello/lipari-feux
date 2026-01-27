import { VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, ElementType } from "react";
import { HTMLMotionProps } from "motion/react";
import buttonVariants from "./button.styles";

type TButtonVariants = VariantProps<typeof buttonVariants>;

type TButtonBase = ButtonHTMLAttributes<HTMLButtonElement> & {
  iconPos?: "left" | "right";
};

type TButtonWithText = TButtonBase & {
  text: string;
  icon?: ElementType;
};

type TButtonWithoutText = TButtonBase & {
  text?: never;
  icon: ElementType;
};

type TButtonProps = TButtonWithText | TButtonWithoutText;
type TButtonMotionProps = Omit<HTMLMotionProps<"button">, "ref">;

type TButton = TButtonProps & TButtonVariants & TButtonMotionProps;

export type { TButtonProps, TButtonVariants, TButtonMotionProps, TButton };
