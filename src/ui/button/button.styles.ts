import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "group inline-flex items-center justify-center shrink-0 h-fit w-fit text-nowrap rounded-lg cursor-pointer disabled:pointer-events-none disabled:opacity-60 transition-all duration-150 ease-in",
  {
    variants: {
      variant: {
        primary:
          "border-2 border-primary bg-primary text-white hover:bg-primary-hover",
        secondary:
          "border-2 border-primary bg-transparent text-primary hover:bg-primary-hover/10",
      },
      size: {
        sm: "p-2",
        md: "p-3",
        lg: "p-4",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export default buttonVariants;
