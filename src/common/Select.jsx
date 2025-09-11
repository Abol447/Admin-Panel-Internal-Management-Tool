import React from "react";

export default function Select({ opt = [], register = null, name }) {
  const selectProps = register != null ? register(name) : {};
  return (
    <div>
      <select
        {...selectProps}
        className="w-[184px] appearance-none select--btn form--input"
      >
        {opt.map((item) => {
          return <option>{item}</option>;
        })}
      </select>
    </div>
  );
}
