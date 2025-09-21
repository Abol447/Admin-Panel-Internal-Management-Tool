import React from "react";

export default function Select({ opt = [], register = null, name, fn, value }) {
  const selectProps = register != null ? register(name) : {};
  return (
    <div>
      <select
        value={value}
        onChange={(e) => fn(e.currentTarget.value)}
        {...selectProps}
        className="w-[184px] appearance-none select--btn form--input"
      >
        <option value="" hidden>
          Fillter{" "}
        </option>
        {opt.map((item) => {
          return <option value={item}>{item}</option>;
        })}
      </select>
    </div>
  );
}
