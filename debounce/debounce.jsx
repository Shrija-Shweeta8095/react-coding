import React, { useMemo } from "react";

const Debounce = () => {
  const debounce = (func, delay) => {
    let timer;
    return function (...args) {
      const context = this;
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(context, args);
      }, delay);
    };
  };
  const handleSearch = (e) => {
    console.log(e.target.value);
  };

  const handleDebounceSearch = useMemo(() => debounce(handleSearch, 500), []);
  return (
    <>
      <input type="search" onChange={handleDebounceSearch} />
    </>
  );
};

export default Debounce;
