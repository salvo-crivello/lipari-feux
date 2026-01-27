import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { TButton } from "./button.types";
import { UserCircle2 } from "lucide-react";
import Button from "./Button";

// ======================================================
// STORY CONFIGURATION
// ======================================================

type TButtonStoryArgs = TButton & {
  useIcon?: boolean;
};

const meta: Meta<TButtonStoryArgs> = {
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

    onClick: { action: "clicked" },

    useIcon: {
      name: "Enable icon",
      control: "boolean",
      table: {
        category: "Icon",
      },
    },

    icon: {
      table: {
        category: "Icon",
        type: { summary: "React.ElementType" },
      },
      control: false,
    },

    iconPos: {
      control: "select",
      options: ["left", "right"],
      table: {
        category: "Icon",
      },
      if: { arg: "useIcon" },
    },
  },
};

export default meta;

type TStory = StoryObj<TButton>;

// ======================================================
// EDITABLE PLAYGROUND
// ======================================================

export const Playground: StoryObj<TButtonStoryArgs> = {
  args: {
    variant: "primary",
    size: "md",
    text: "Click me",
    useIcon: true,
    iconPos: "left",
    disabled: false,
  },
  render: ({ useIcon, ...args }) => (
    <Button {...args} {...(useIcon && { icon: UserCircle2 })} />
  ),
};

// ======================================================
// CATALOG
// ======================================================

export const Variants: TStory = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button text="Click me!" />
      <Button text="Click me!" icon={UserCircle2} />
      <Button text="Click me!" icon={UserCircle2} iconPos="right" />
      <Button icon={UserCircle2} />
    </div>
  ),
};
