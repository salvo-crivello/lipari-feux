import type { Preview, Decorator } from "@storybook/react-vite";
import { INITIAL_VIEWPORTS } from "storybook/viewport";
import "../src/index.css";
// import { auditButton } from "../src/a11y/button.a11y";

// ======================================================
// THEME DECORATOR
// ======================================================

const withTheme: Decorator = (Story, context) => {
  const theme = context.globals.theme ?? "light";
  document.documentElement.setAttribute("data-theme", theme);
  return Story();
};

// const withButtonA11yAudit: Decorator = (Story) => {
//   const story = Story();

//   setTimeout(() => {
//     document.querySelectorAll("button").forEach((btn) => {
//       try {
//         auditButton(btn as HTMLButtonElement);
//       } catch (e) {
//         console.error("A11Y Button:", e);
//         btn.style.outline = "2px solid red";
//         btn.setAttribute("data-a11y-error", "true");
//       }
//     });
//   }, 0);

//   return story;
// };

// ======================================================
// PREVIEW CONFIG
// ======================================================

const preview: Preview = {
  decorators: [withTheme],

  globalTypes: {
    theme: {
      name: "Theme",
      description: "Global theme for FEUx components",
      defaultValue: "light",
      toolbar: {
        icon: "circlehollow",
        items: [
          { value: "light", title: "Light" },
          { value: "dark", title: "Dark" },
        ],
        showName: true,
      },
    },
  },

  parameters: {
    viewport: {
      options: INITIAL_VIEWPORTS,
    },
    backgrounds: {
      disable: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
