import clsx from "clsx";

type InputProps = {
  id?: string;
  type?: string;
  placeholder?: string;
  label?: string;
  error?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "filled" | "outlined";
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
  placeholder,
  size = "md",
  id,
  type = "text",
  label,
  error,
  variant = "default",
  fullWidth = false,
  disabled = false,
  className,
  onChange,
}: InputProps) {
  const inputClasses = clsx(
    "rounded focus:outline-none focus:ring-2 transition-all border w-full",
    // size 설정
    {
      "px-2 py-1 text-sm": size === "sm",
      "px-3 py-2 text-base": size === "md",
      "px-4 py-3 text-lg": size === "lg",
    },

    // variant 설정
    {
      "border-gray-300 focus:border-blue-500 focus:ring-blue-200":
        variant === "default" && !error,
      "border-transparent bg-gray-100 focus:bg-white focus:border-blue-500 focus:ring-blue-200":
        variant === "filled" && !error,
      "border-gray-300 bg-transparent focus:border-blue-500 focus:ring-blue-200":
        variant === "outlined" && !error,
    },
    error && "border-red-500 focus:border-red-600 focus:ring-red-200",
    disabled && "bg-gray-100 text-gray-400",
    className,
  );

  const labelClasses = clsx(
    "block mb-2 font-medium",
    {
      "text-sm": size === "sm",
      "text-base": size === "md",
      "text-lg": size === "lg",
    },
    error && "text-red-500",
  );

  const errorClasses = "mt-1 text-sm text-red-600";
  return (
    <div className="">
      <label className={labelClasses} htmlFor="email">
        {label}
      </label>
      <input id="email" className={inputClasses} placeholder={placeholder} />
      {error && <p className={errorClasses}>{error}</p>}
    </div>
  );
}
