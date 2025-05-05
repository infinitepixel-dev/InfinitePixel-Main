//AccessibleIcon.js
"use client"
import PropTypes from "prop-types"
import { cloneElement } from "react"

export default function AccessibleIcon({ icon, label }) {
  const iconWithAccessibility = cloneElement(icon, {
    role: "img",
    "aria-label": label,
    title: label,
  })

  return (
    <button
      tabIndex={0}
      aria-label={label}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
        }
      }}
      className="rounded outline-none focus:ring-2 focus:ring-yellow-400 cursor-help"
    >
      {iconWithAccessibility}
    </button>
  )
}

AccessibleIcon.propTypes = {
  icon: PropTypes.element.isRequired, // The instantiated icon element (not just its type)
  label: PropTypes.string.isRequired,
}
