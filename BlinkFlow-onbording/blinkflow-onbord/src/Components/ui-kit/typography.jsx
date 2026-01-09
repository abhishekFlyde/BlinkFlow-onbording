import clsx from "clsx";

const colorMap = {
  black: "#000000",
  white: "#FFFFFF",
  white1: "#FFFFFFE5",
  white2: "#FFFFFFB2",
  gray: "#636363",
  primary: "#CCEF55",
  secondary: "#AAAAAA",
};

const variantClassMap = {
  subtitleSizeBase: "subtitle-size-base", // 32px
  subheadingSizeMedium: "subheading-size-medium", // 20px
  bodySizeMedium: "body-size-medium", // 16px
  bodySizeSmall: "body-size-small", // 14px
};

const Typography = ({
  variant = "body-2",
  as,
  children,
  className,
  colorVariant = "black",
  ...props
}) => {
  const Tag = as || getDefaultTag(variant);

  return (
    <Tag
      className={clsx(variantClassMap[variant], className)}
      style={{
        whiteSpace: "pre-line",
        color: colorMap[colorVariant] || colorMap.black,
      }}
      {...props}
    >
      {children}
    </Tag>
  );
};

function getDefaultTag(variant) {
  const map = {
    subtitleSizeBase: "h1",
    subheadingSizeMedium: "h2",
    bodySizeMedium: "p",
    bodySizeSmall: "p",
  };

  return map[variant] || "p";
}

export default Typography;
