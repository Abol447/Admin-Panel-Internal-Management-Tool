import React from "react";

export default function Select({ opt = [], register, name, form = false }) {
  const selectProps = form && register ? register(name) : {};
  return (
    <select
      {...selectProps}
      className="w-[184px] appearance-none select--btn form--input"
    >
      {opt.map((item) => {
        return <option>{item}</option>;
      })}
    </select>
  );
}
