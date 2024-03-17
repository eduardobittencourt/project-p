import Image from "next/image";

export function Hero() {
  return (
    <section id="hero" className="pt-10">
      <div className="flex flex-col gap-8">
        <Image
          src="/axolotl.png"
          width={445}
          height={319}
          alt="An axolotl"
          className="mx-auto pb-4"
        />

        <p className="font-serif text-xl text-gray">
          Bem vindo ao Bolão da Chegada do Theo! Escolhemos essa brincadeira pra
          vocês participarem conosco desse momento tão especial.
        </p>

        <p className="font-serif text-xl text-gray">
          Um pacote de fralda e um pouco de sorte podem te render um voucher do
          iFood!
        </p>
      </div>
    </section>
  );
}
