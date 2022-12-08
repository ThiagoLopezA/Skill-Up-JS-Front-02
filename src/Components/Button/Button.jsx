import React from 'react'

export default function Button({
  handleClick,
  children,
  type,
  variant,
  size = 'sm',
  disabled = false,
}) {
  return (
    <button
      type={type}
      class={`btn btn-${variant} btn-${size}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
