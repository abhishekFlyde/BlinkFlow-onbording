import clsx from "clsx";

export default function GlassContainer({ children, className, variant = "primary" }) {
  const variants = {
    primary: "primary-spacing",
  };

  return (
    
    <div className={clsx(`glass-container ${variants[variant]} ${className}`)}>
      {children}
    </div>
  );
}
