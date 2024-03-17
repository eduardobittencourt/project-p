type CalendarCellProps = Readonly<{
  value: string;
  disabled?: boolean;
  label: string;
}>;

export function CalendarCell({ value, disabled, label }: CalendarCellProps) {
  return (
    <label htmlFor={value}>
      <input
        type="radio"
        name="date"
        id={value}
        className="peer hidden"
        disabled={disabled}
        value={value}
      />

      <span className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-transparent font-serif text-xl text-gray peer-checked:border-brown peer-checked:text-brown peer-disabled:text-lightGray">
        {label}
      </span>
    </label>
  );
}
