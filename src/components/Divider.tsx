import Image from "next/image";

export function Divider() {
  return (
    <Image
      src="/separator.png"
      width={50}
      height={50}
      alt="A starfish"
      className="mx-auto py-8"
    />
  );
}
