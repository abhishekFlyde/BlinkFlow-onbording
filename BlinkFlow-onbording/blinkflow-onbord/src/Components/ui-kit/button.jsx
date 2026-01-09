"use client";
import clsx from "clsx";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  icon, // Arrow ya koi icon
  iconPosition = "right",
  showIcon, // optional override
  className,
  as,
  disabled,
  ...props
}) => {
  const Tag = as || "button";

  // ✅ Only show icon if variant is "primary"
  const shouldShowIcon = variant === "primary" && (showIcon ?? true);

  return (
    <Tag
      disabled={disabled}
      className={clsx(
        "btn",
        `btn--${variant}`,
        `btn--${size}`,
        disabled && "btn--disabled",
        icon && shouldShowIcon && "btn--with-icon",
        className
      )}
      {...props}
    >
      {/* Icon left */}
      {icon && shouldShowIcon && iconPosition === "left" && (
        <span className="btn-icon">{icon}</span>
      )}

      <span className={variant.startsWith("link") }>
        {children}
      </span>

      {/* Icon right */}
      {icon && shouldShowIcon && iconPosition === "right" && (
        <span className="btn-icon">{icon}</span>
      )}
    </Tag>
  );
};

export default Button;
