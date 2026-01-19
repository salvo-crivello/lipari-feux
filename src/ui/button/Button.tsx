import React from "react";
import { TButtonProps } from "./Button.types";
import clsx from "clsx";
import buttonVariants from "./Button.styles";

function Button({
  className,
  variant,
  size,
  text,
  icon: Icon,
  iconPos = "left",
  ...props
}: TButtonProps) {
  return (
    <button
      className={clsx(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {Icon && iconPos === "left" && (
        <Icon className={clsx("shrink-0", { "mr-2": text })} size={"1.2em"} />
      )}
      {text}
      {Icon && iconPos === "right" && (
        <Icon className={clsx("shrink-0", { "ml-2": text })} size={"1.2em"} />
      )}
    </button>
  );
}

export default Button;
