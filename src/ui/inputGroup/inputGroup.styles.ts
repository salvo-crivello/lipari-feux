import { cva } from "class-variance-authority";

// =======================================================
// input group
// =======================================================

export const inputGroupVariants = cva("flex group max-w-prose", {
  variants: {
    orientation: {
      vertical: "flex-col",
      horizontal: "flex-row items-center gap-2",
    },
  },
  defaultVariants: {
    orientation: "vertical",
  },
});

// =======================================================
// input label
// =======================================================

export const inputLabelVariants = cva("leading-none mb-2 font-semibold", {
  variants: {
    variant: {
      primary: "text-text-muted-on-bg",
      secondary: "text-text-muted-on-bg",
    },
    size: {
      sm: "text-xs",
      md: "text-xs",
      lg: "text-xs",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "sm",
  },
});

// =======================================================
// input text
// =======================================================

export const inputTextVariants = cva(
  "flex w-full rounded-md transition-all disabled:cursor-not-allowed focus:outline-none placeholder:text-text-muted disabled:text-text-muted-on-bg",
  {
    variants: {
      variant: {
        primary:
          "text-text-on-bg border-2 border-border bg-transparent focus:border-border-focus focus-visible:border-border-focus group-hover:border-border-hover disabled:border-border",
        secondary:
          "text-text-on-bg border-2 border-surface-1 bg-surface-1 focus:border-border-focus focus-visible:border-border-focus group-hover:border-border-hover disabled:border-surface-1",
      },
      size: {
        sm: "h-8 min-w-8 px-3 text-sm",
        md: "h-10 min-w-10 px-4 text-sm",
        lg: "h-12 min-w-12 px-5 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);
