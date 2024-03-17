import Link from "next/link";

type CalendarCellProps = Readonly<{
  value: string;
  disabled?: boolean;
  label: string;
  checked: boolean;
}>;

export function CalendarCell({
  value,
  disabled,
  label,
  checked,
}: CalendarCellProps) {
  return (
    <label htmlFor={value}>
      <input
        type="radio"
        name="date"
        id={value}
        className="peer hidden"
        disabled={disabled}
        value={value}
        checked={checked}
        defaultChecked={checked}
      />

      <Link
        href={`/?date=${value}`}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-transparent font-serif text-xl text-gray peer-checked:border-brown peer-checked:text-brown peer-enabled:cursor-pointer peer-disabled:text-lightGray"
        scroll={false}
      >
        {label}
      </Link>
    </label>
  );
}
