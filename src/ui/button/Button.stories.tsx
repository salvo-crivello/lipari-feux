import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { TButtonProps } from "./Button.types";

// ======================================================
// STORY CONFIGURATION
// ======================================================

const meta: Meta<TButtonProps> = {
  title: "UI/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "radio",
      options: ["primary", "secondary"],
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
    btnText: { control: "text" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<TButtonProps>;

// ======================================================
// VARIANTS
// ======================================================

export const Primary: Story = {
  args: {
    variant: "primary",
    size: "md",
    btnText: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "md",
    btnText: "Secondary Button",
  },
};

export const Small: Story = {
  args: {
    variant: "primary",
    size: "sm",
    btnText: "Small Button",
  },
};

export const Large: Story = {
  args: {
    variant: "primary",
    size: "lg",
    btnText: "Large Button",
  },
};
