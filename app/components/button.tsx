import classNames from "classnames";
import { ComponentProps } from "react";

type ComponentVariantTypes = "primary" | "secondary" | "danger" | "success" | "warning";

export type ButtonProps = {
  children: React.ReactNode;
  onClick: ComponentProps<"button">["onClick"];
  className?: string;
  type?: ComponentProps<"button">["type"];
  variant?: ComponentVariantTypes;
};

export const Button = ({ children, onClick, className, type, variant }: ButtonProps) => {
  return (
    <button
      className={classNames(
        "btn btn-primary",
        {
          "btn-primary": variant === "primary",
          "btn-secondary": variant === "secondary",
          "btn-danger": variant === "danger",
          "btn-success": variant === "success",
          "btn-warning": variant === "warning",
        },
        className
      )}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
