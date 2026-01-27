import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "group inline-flex items-center justify-center shrink-0 w-fit text-nowrap rounded-lg cursor-pointer disabled:pointer-events-none disabled:opacity-60 transition-all duration-150 ease-in",
  {
    variants: {
      variant: {
        primary:
          "border-2 border-primary bg-primary text-text hover:bg-primary-hover",
        secondary:
          "border-2 border-primary bg-transparent text-primary hover:bg-primary-hover/10",
      },
      size: {
        sm: "h-8 min-w-8 px-3 text-sm",
        md: "h-10 min-w-10 px-4 text-sm",
        lg: "h-12 min-w-12 px-5 text-base",
      },
      onlyIcon: {
        true: "px-0!",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export default buttonVariants;
