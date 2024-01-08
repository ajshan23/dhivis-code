import React from "react";

const sizeClasses = {
  txtInterLight1433: "font-inter font-light",
  txtPassionOneRegular3433: "font-normal font-passionone",
  txtInterLight1233: "font-inter font-light",
  txtInterSemiBold1433: "font-inter font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
