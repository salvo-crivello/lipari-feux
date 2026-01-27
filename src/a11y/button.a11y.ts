export const auditButton = (button: HTMLButtonElement) => {
  assertNoNestedInteractive(button);
  assertDisabledIsNative(button);
  assertIconButtonHasLabel(button);
};

// ======================================================
// ASSERTIONS
// ======================================================

function assertNoNestedInteractive(button: HTMLButtonElement) {
  const interactiveSelector = `
    button,
    a[href],
    input,
    select,
    textarea,
    [role="button"],
    [tabindex]:not([tabindex="-1"])
  `;

  const nested = button.querySelector(interactiveSelector);

  if (nested) {
    throw new Error("Button must not contain nested interactive elements");
  }
}

// ======================================================

export function assertDisabledIsNative(button: HTMLButtonElement) {
  const isDisabledAttr = button.hasAttribute("disabled");
  const isAriaDisabled = button.getAttribute("aria-disabled") === "true";

  if (isAriaDisabled && !isDisabledAttr) {
    throw new Error(
      "Use native disabled attribute instead of aria-disabled on <button>",
    );
  }

  if (isDisabledAttr && button.tabIndex >= 0) {
    throw new Error("Disabled button must not be focusable");
  }
}

// ======================================================

export function assertIconButtonHasLabel(button: HTMLButtonElement) {
  const textContent = button.textContent?.trim() ?? "";

  const hasVisibleText = textContent.length > 0;

  const hasAriaLabel =
    button.hasAttribute("aria-label") || button.hasAttribute("aria-labelledby");

  if (!hasVisibleText && !hasAriaLabel) {
    throw new Error("Icon-only button must have aria-label or aria-labelledby");
  }
}
