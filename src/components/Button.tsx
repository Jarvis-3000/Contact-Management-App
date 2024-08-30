import React from "react";

interface ButtonProps {
  variant?: "default" | "info" | "danger";
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = "default",
  onClick,
  children,
  disabled = false,
  className = "",
}) => {
  const baseStyles =
    "flex items-center gap-2 px-4 py-2 rounded font-semibold transition-all duration-300";
  let variantStyles = "";

  switch (variant) {
    case "default":
      variantStyles =
        "bg-blue-500 text-white hover:bg-blue-600 focus:ring-4 focus:ring-blue-300";
      break;
    case "danger":
      variantStyles =
        "bg-red-500 text-white hover:bg-red-600 focus:ring-4 focus:ring-red-300";
      break;
    case "info":
      variantStyles =
        "bg-gray-500 text-white hover:bg-gray-600 focus:ring-4 focus:ring-gray-300";
      break;
    default:
      variantStyles =
        "bg-blue-500 text-white hover:bg-blue-600 focus:ring-4 focus:ring-blue-300";
  }

  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles} ${disabledStyles} focus:outline-none ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
