import { cva } from "class-variance-authority";

// ======================================================
// STYLES
// ======================================================

const buttonVariants = cva(
  "group inline-flex items-center justify-center shrink-0 h-fit w-fit text-nowrap rounded-lg disabled:pointer-events-none disabled:opacity-60 transition-all duration-150 ease-in",
  {
    variants: {
      variant: {
        primary: "border border-black bg-black text-white hover:bg-black/90",
        secondary:
          "border border-black bg-transparent text-black hover:bg-black/10",
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
