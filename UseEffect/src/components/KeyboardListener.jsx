import { useState } from "react";

export default function App() {
  const [key, setKey] = useState("");

  return (
    <div className="component2">
      <input
        type="text"
        value={key}
        onKeyUp={(e) => setKey(e.key)}
        placeholder="Type something..."
      />

      <h2>Last Key: {key}</h2>
    </div>
  );
}