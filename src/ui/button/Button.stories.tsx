import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { TButtonProps } from "./Button.types";
import { UserCircle2 } from "lucide-react";

// ======================================================
// STORY CONFIGURATION
// ======================================================

const meta: Meta<TButtonProps & { useIcon: boolean }> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    text: { control: "text" },
    disabled: { control: "boolean" },

    useIcon: {
      name: "use Icon props",
      control: "boolean",
      table: { category: "Icon props", type: { detail: "boolean" } },
    },

    icon: {
      control: "check",
      table: { category: "Icon props" },
      if: { arg: "useIcon" },
    },

    iconPos: {
      control: "select",
      options: ["left", "right"],
      table: { category: "Icon props" },
      if: { arg: "useIcon" },
    },

    onClick: { action: "clicked" },
  },
};

export default meta;

type TStory = StoryObj<TButtonProps>;

// ======================================================
// EDITABLE PLAYGROUND
// ======================================================

export const Playground: TStory = {
  args: {
    variant: "primary",
    size: "md",
    text: "Click me",
    icon: UserCircle2,
    iconPos: "left",
    disabled: false,
  },
};

// ======================================================
// CATALOG
// ======================================================

export const Variants: TStory = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="flex gap-3">
      <Button text="Click me!" />
      <Button text="Click me!" icon={UserCircle2} />
      <Button text="Click me!" icon={UserCircle2} iconPos="right" />
      <Button icon={UserCircle2} />
    </div>
  ),
};

// ======================================================
// VARIANTS
// ======================================================
