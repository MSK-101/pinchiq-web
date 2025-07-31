"use client";

import { useState } from "react";

export default function Switch() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div className="w-[300px]">
      <input
        type="checkbox"
        className="hidden"
        id="switch"
        checked={isChecked}
        onChange={handleChange}
      />
      <label
        className="flex items-center bg-gray-200 relative cursor-pointer py-2 rounded-full border-10 border-gray-200"
        htmlFor="switch"
      >
        <div className="w-1/2 z-2 text-center text-gray-400 font-semibold">
          Provider
        </div>
        <div className="w-1/2 z-2 text-center text-gray-400 font-semibold">
          Agent
        </div>
        <div className="w-1/2 absolute top-0 bottom-0 bg-white rounded-full z-1 indicator"></div>
      </label>
    </div>
  );
}
