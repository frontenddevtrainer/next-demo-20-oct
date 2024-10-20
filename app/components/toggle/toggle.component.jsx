"use client"

import { useState } from "react";

export default function Toggle() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        Toggle: {isActive ? "Yes" : "No"}
      </button>
    </div>
  );
}
