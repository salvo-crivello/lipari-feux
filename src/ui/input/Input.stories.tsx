import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input"; // il tuo componente reale

// === default export obbligatorio ===
const meta: Meta<typeof Input> = {
  title: "UI/Input", // titolo che apparirà in Storybook
  component: Input,
  tags: ["autodocs"],
};

export default meta; // <-- qui deve esserci il default export

// === singole storie ===
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Inserisci testo",
  },
};

export const WithValue: Story = {
  args: {
    value: "Test",
  },
};
