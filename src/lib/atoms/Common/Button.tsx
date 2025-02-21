import { ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  variant?: "primary" | "outlined" | "primaryShaded";
  Icon?: React.ComponentType<{ className?: string }>;
  iconPosition?: "left" | "right";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  role?: "button" | "tab";
}

export default function Button({
  children,
  variant = "primary",
  Icon,
  iconPosition = "left",
  onClick,
  className = "",
  disabled = false,
  role = "button",
}: ButtonProps) {
  const baseClasses = "px-2 py-2 rounded-md flex items-center gap-2 transition-colors disabled:opacity-50 text-xs sm:text-sm md:text-md";
  const reverseClasses = "flex-row-reverse";
  
  
  const variantClasses = {
    primary: "bg-primary text-white hover:bg-primary/90",
    outlined: "border-2 border-primary text-primary hover:bg-primary/10",
    primaryShaded: "bg-primary/10 text-primary font-semibold hover:bg-primary/20",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${iconPosition === "right" && reverseClasses } ${className}`}
      role={role}
    >
      {Icon && <Icon  />}
      {children}
    </button>
  );
}
