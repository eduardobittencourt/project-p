import { InputHTMLAttributes, forwardRef } from "react";

type CalendarCellProps = {
  value: string;
  disabled?: boolean;
  label: string;
};

export function CalendarCell({ value, disabled, label }: CalendarCellProps) {
  return (
    <label htmlFor={value} className="py-1">
      <input
        type="radio"
        name="date"
        id={value}
        className="peer hidden"
        disabled={disabled}
        value={value}
      />
      <span className="font-serif text-xl text-gray peer-checked:text-brown peer-disabled:text-lightGray">
        {label}
      </span>
    </label>
  );
}
