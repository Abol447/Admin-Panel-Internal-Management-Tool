import React from "react";
import Select from "../../common/Select";

export default function FormSelect({
  label,
  lableClassName,
  headerOpt,
  opt,
  registerName,
  register,
  className,
}) {
  return (
    <div className={className}>
      <div className="flex justify-between items-center">
        <h4 for={label} className={lableClassName}>
          {label}
        </h4>
        {headerOpt}
      </div>
      <Select
        register={register}
        name={registerName}
        opt={opt}
        width={"100%"}
      />
    </div>
  );
}
