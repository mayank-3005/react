import React, { useState, useCallback } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    // Function logic
    console.log("Button clicked!");
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default MyComponent;
