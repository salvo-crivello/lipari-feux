// eslint.config.js
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "typeAlias",
          format: ["PascalCase"],
          prefix: ["T"],
        },
        {
          selector: "interface",
          format: ["PascalCase"],
          prefix: ["T"],
        },
        {
          selector: "enum",
          format: ["PascalCase"],
          prefix: ["T"],
        },
      ],
    },
  },
);
