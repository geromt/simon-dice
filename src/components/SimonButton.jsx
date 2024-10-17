import { useState } from "react"

export const SimonButton = ({ children, index, color, activateButton }) => {
    return (
    <button onClick={activateButton}
        className={`${color} w-64 h-64 border-solid border-4 border-stone-300 rounded-md place-items-center grid grid-cols-1`}>
    </button>
    )
  }