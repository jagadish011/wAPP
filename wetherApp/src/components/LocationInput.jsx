import React, { useState } from "react";

const LocationInput = ({ onLocationChange }) => {
  const [location, setLocation] = useState("");

  return (
    <div className="mb-4 flex">
      <input
        type="text"
        placeholder="Enter city (e.g., Berlin)"
        className="p-2 rounded-l-lg border-none outline-none w-full"
        onChange={(e) => setLocation(e.target.value)}
      />
      <button
        onClick={() => onLocationChange(location)}
        className="bg-blue-500 px-4 py-2 rounded-r-lg text-white"
      >
        Search
      </button>
    </div>
  );
};

export default LocationInput;
