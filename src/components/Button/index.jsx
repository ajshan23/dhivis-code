import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[22px]", circle: "rounded-[50%]" };
const variants = {
  fill: {
    gray_800_6c: "bg-gray-800_6c text-white-A700",
    gray_900: "bg-gray-900",
  },
};
const sizes = { xs: "p-[9px]", sm: "p-[13px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "circle",
  size = "xs",
  variant = "fill",
  color = "gray_900",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round", "circle"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["gray_800_6c", "gray_900"]),
};

export { Button };
