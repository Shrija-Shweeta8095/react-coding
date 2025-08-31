import React, { useMemo } from "react";

const Throttle = () => {
  const throttle = (func, limit) => {
    let lastFuncTime = 0;
    return function (...args) {
      const now = Date.now();
      if (now - lastFuncTime >= limit) {
        func(...args);
        lastFuncTime = now;
      }
    };
  };

  const handleChange = () => {
    console.log("abc");
  };

  const handleThrottleChange = useMemo(() => throttle(handleChange, 500), []);

  return (
    <>
      <h2>Throttle Example</h2>
      <input type="search" onChange={handleThrottleChange} />
    </>
  );
};

export default Throttle;
