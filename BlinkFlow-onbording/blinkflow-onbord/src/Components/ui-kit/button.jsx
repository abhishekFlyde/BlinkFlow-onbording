"use client";
import clsx from "clsx";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  showIcon,
  className,
  as,
  disabled,
  ...props
}) => {
  const shouldShowIcon =
    showIcon !== undefined ? showIcon : variant === "primary";

  const Tag = as || "button";

  return (
    <Tag
      disabled={disabled}
      className={clsx(
        "btn",
        `btn--${variant}`,
        `btn--${size}`,
        disabled && "btn--disabled",
        icon && shouldShowIcon && variant !== "link" && "btn--with-icon",
        className
      )}
      {...props}
    >
      {/* icon left */}
      {icon &&
        shouldShowIcon &&
        iconPosition === "left" &&
        variant !== "link" && (
          <span className={variant === "white" ? "btn-icon-white" : "btn-icon"}>
            {icon}
          </span>
        )}

      <span className={variant.startsWith("link") ? "body-3" : "h4"}>
        {children}
      </span>

      {/* icon right */}
      {icon &&
        shouldShowIcon &&
        iconPosition === "right" &&
        variant !== "link" && (
          <span className={variant === "white" ? "btn-icon-white" : "btn-icon"}>
            {icon}
          </span>
        )}
    </Tag>
  );
};

export default Button;
