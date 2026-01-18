import { VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";
import buttonVariants from "./Button.styles";

type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    btnText?: string;
  };

export type { TButtonProps };
