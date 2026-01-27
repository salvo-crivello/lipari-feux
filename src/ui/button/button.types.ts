import { VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, ElementType } from "react";
import { HTMLMotionProps } from "motion/react";
import buttonVariants from "./button.styles";

type TButtonVariants = VariantProps<typeof buttonVariants>;

type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: ElementType;
  iconPos?: "left" | "right";
  text?: string;
};
type TButtonMotionProps = Omit<HTMLMotionProps<"button">, "ref">;

type TButton = TButtonProps & TButtonVariants & TButtonMotionProps;

export type { TButtonProps, TButtonVariants, TButtonMotionProps, TButton };
