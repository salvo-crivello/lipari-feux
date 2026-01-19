import { VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, ElementType } from "react";
import buttonVariants from "./Button.styles";

type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    icon?: ElementType;
    iconPos?: "left" | "right";
    text?: string;
  };

export type { TButtonProps };
