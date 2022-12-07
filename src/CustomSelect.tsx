import React from "react";
import Select from "react-select";

export function CustomSelect({
  onChange,
  options,
  value,
  onBlur,
}: {
  onChange: any;
  options: any;
  value: any;
  onBlur: any;
}) {
  const defaultValue = (options: any, value: any) => {
    return options ? options.find((option: any) => option.label === value) : "";
  };

  return (
    <Select
      isMulti
      classNamePrefix="select"
      value={defaultValue(options, value)}
      onChange={(value) => {
        onChange(value);
      }}
      onBlur={onBlur}
      options={options}
    />
  );
}
