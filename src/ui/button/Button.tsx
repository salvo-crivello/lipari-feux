import React from "react";
import { TButtonProps } from "./Button.types";
import clsx from "clsx";
import buttonVariants from "./Button.styles";

function Button({ className, variant, size, btnText, ...props }: TButtonProps) {
  return (
    <button
      className={clsx(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {btnText}
    </button>
  );
}

export default Button;
