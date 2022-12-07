import React from "react";

export default function Button({
  handleClick,
  children,
  type,
  variant,
  size = "sm",
}) {
  return (
    <button
      type={type}
      class={`btn btn-${variant} btn-${size}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
