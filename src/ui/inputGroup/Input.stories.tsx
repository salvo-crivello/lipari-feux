import type { Meta, StoryObj } from "@storybook/react";
import InputGroup from "./InputGroup";
import { TInputGroup } from "./inputGroup.types";
import { Search } from "lucide-react";

// ======================================================
// STORY CONFIGURATION
// ======================================================

type TInputStoryArgs = TInputGroup;

const meta: Meta<TInputStoryArgs> = {
  title: "UI/Input",
  component: InputGroup,
  tags: ["autodocs"],
};

export default meta;

type TStory = StoryObj<TInputStoryArgs>;

// ======================================================
// EDITABLE PLAYGROUND
// ======================================================

export const Playground: StoryObj<TInputStoryArgs> = {
  args: {
    variant: "primary",
    size: "md",
  },
  render: ({ ...args }: TInputStoryArgs) => (
    <InputGroup {...args}>
      <InputGroup.Label>Label</InputGroup.Label>
      <InputGroup.InputText placeholder="Type here..." />
    </InputGroup>
  ),
};

// ======================================================
// VARIANTS
// ======================================================

export const Variants: TStory = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4">
      <InputGroup>
        <InputGroup.Label>Label</InputGroup.Label>
        <InputGroup.InputText placeholder="Type here..." />
      </InputGroup>
      <InputGroup variant="secondary">
        <InputGroup.Label>Label</InputGroup.Label>
        <InputGroup.InputText placeholder="Type here..." />
      </InputGroup>
      <InputGroup>
        <InputGroup.Label>Label</InputGroup.Label>
        <InputGroup.InputText placeholder="Type here..." icon={Search} />
      </InputGroup>
      <InputGroup variant="secondary">
        <InputGroup.Label>Label</InputGroup.Label>
        <InputGroup.InputText
          placeholder="Type here..."
          icon={Search}
          iconPos="right"
        />
      </InputGroup>
    </div>
  ),
};
