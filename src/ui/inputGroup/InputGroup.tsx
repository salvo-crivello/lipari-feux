import { clsx } from "clsx";
import {
  createContext,
  forwardRef,
  PropsWithChildren,
  useContext,
} from "react";
import {
  inputGroupVariants,
  inputLabelVariants,
  inputTextVariants,
} from "./inputGroup.styles";
import {
  TInputGroupProps,
  TInputLabel,
  TInputLabelProps,
  TInputText,
  TInputTextProps,
} from "./inputGroup.types";

// =======================================================
// input group
// =======================================================

const InputGroupContext = createContext({
  readonly: false,
  required: true,
  orientation: "vertical",
  variant: undefined as TInputGroupProps["variant"],
  size: undefined as TInputGroupProps["size"],
});
const { Provider: InputGroupProvider } = InputGroupContext;

export const useInputGroup = () => useContext(InputGroupContext);

const InputGroup = ({
  children,
  readonly = false,
  required = true,
  orientation = "vertical",
  variant,
  size,
  className,
}: PropsWithChildren<TInputGroupProps>) => {
  return (
    <InputGroupProvider
      value={{ readonly, orientation, required, variant, size }}
    >
      <div className={clsx(inputGroupVariants({ orientation, className }))}>
        {children}
      </div>
    </InputGroupProvider>
  );
};

// =======================================================
// input label
// =======================================================

const InputLabel = forwardRef<HTMLLabelElement, TInputLabel>(
  function LabelComponent({ children, ...props }: TInputLabelProps, ref) {
    const { required, size, variant } = useInputGroup();

    return (
      <label
        ref={ref}
        className={clsx(inputLabelVariants({ variant, size }))}
        {...props}
      >
        {children}
        {required && <span className="ml-2 text-warning-500">*</span>}
      </label>
    );
  },
);

// =======================================================
// input text
// =======================================================

const InputText = forwardRef<HTMLInputElement, TInputText>(
  function FormInputComponent(
    {
      icon: Icon,
      iconPos = "left",
      className,
      disabled,
      ...props
    }: TInputTextProps,
    ref,
  ) {
    const { readonly, variant, size } = useInputGroup();

    return (
      <div className="relative">
        {Icon && (
          <Icon
            size="1em"
            className={clsx(
              "absolute top-1/2 -translate-y-1/2 text-text-muted pointer-events-none",
              {
                "left-3": Icon && iconPos === "left",
                "right-3": Icon && iconPos === "right",
              },
            )}
          />
        )}
        <input
          ref={ref}
          className={clsx(inputTextVariants({ variant, size }), className, {
            "pl-10": Icon && iconPos !== "right",
            "pr-10": Icon && iconPos === "right",
          })}
          {...props}
          disabled={readonly || disabled}
        />
      </div>
    );
  },
);

// =======================================================
// exports
// =======================================================

InputGroup.Label = InputLabel;
InputGroup.InputText = InputText;

export default InputGroup;
