import { clsx } from "clsx";
import {
  createContext,
  forwardRef,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import {
  inputGroupVariants,
  inputLabelVariants,
  inputMessageVariants,
  inputTextareaVariants,
  inputTextVariants,
} from "./inputGroup.styles";
import {
  TInputGroupProps,
  TInputLabel,
  TInputLabelProps,
  TInputMessage,
  TInputPassword,
  TInputText,
  TInputTextarea,
  TInputTextareaProps,
  TInputTextProps,
} from "./inputGroup.types";
import { EyeClosedIcon, EyeIcon } from "lucide-react";

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
  function LabelComponent(
    { children, className, ...props }: TInputLabelProps,
    ref,
  ) {
    const { required, size, variant } = useInputGroup();

    return (
      <label
        ref={ref}
        className={clsx(inputLabelVariants({ variant, size, className }))}
        {...props}
      >
        {children}
        {required && <span className="ml-2 text-warning-500">*</span>}
      </label>
    );
  },
);

// =======================================================
// input message
// =======================================================

const Message = forwardRef<HTMLElement, TInputMessage>(
  function MessageComponent(
    { children, className, size, variant = "danger", ...props },
    ref,
  ) {
    return (
      <span
        ref={ref}
        className={clsx(inputMessageVariants({ variant, size, className }))}
        {...props}
      >
        {children || "\u00A0"}
      </span>
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
              "absolute top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-primary pointer-events-none",
              {
                "left-3": Icon && iconPos === "left",
                "right-3": Icon && iconPos === "right",
              },
            )}
          />
        )}
        <input
          ref={ref}
          className={clsx(inputTextVariants({ variant, size, className }), {
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

// =========================================================
// textarea
// =========================================================

const Textarea = forwardRef<HTMLTextAreaElement, TInputTextarea>(
  function FormTextareaComponent(
    { className, ...props }: TInputTextareaProps,
    ref,
  ) {
    const { readonly, variant, size } = useInputGroup();
    return (
      <textarea
        ref={ref}
        className={clsx(inputTextareaVariants({ variant, size, className }))}
        {...props}
        disabled={readonly || props.disabled}
      />
    );
  },
);

// ======================================================
// input password
// =======================================================

const InputPassword = forwardRef<HTMLInputElement, TInputPassword>(
  function FormInputComponent({ className, ...props }, ref) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const { readonly, variant, size } = useInputGroup();

    const togglePasswordVisibility = (e: React.MouseEvent) => {
      e.preventDefault();
      setIsPasswordVisible((prevState) => !prevState);
    };

    const Icon = isPasswordVisible ? EyeClosedIcon : EyeIcon;

    return (
      <div className="relative">
        <input
          ref={ref}
          className={clsx(inputTextVariants({ variant, size, className }))}
          type={isPasswordVisible ? "text" : "password"}
          {...props}
          disabled={readonly || props.disabled}
        />
        <Icon
          size="1.2em"
          role="button"
          className={clsx(
            "absolute top-1/2 -translate-y-1/2 right-3 text-text-muted hover:text-primary transition-colors duration-150 ease-out",
          )}
          onClick={togglePasswordVisibility}
        />
      </div>
    );
  },
);

// =======================================================
// exports
// =======================================================

InputGroup.Label = InputLabel;
InputGroup.Message = Message;
InputGroup.InputText = InputText;
InputGroup.Textarea = Textarea;
InputGroup.InputPassword = InputPassword;

export default InputGroup;
