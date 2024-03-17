import Image from "next/image";

export function Hero() {
  return (
    <section id="hero" className="pt-20">
      <div className="grid gap-8 md:grid-cols-5">
        <Image
          src="/axolotl.png"
          width={445}
          height={319}
          alt="An axolotl"
          className="mx-auto pb-4 md:col-span-3"
        />

        <p className="font-serif text-xl text-gray md:col-span-2 md:text-2xl">
          Bem vindo ao Bolão da Chegada do Theo! Escolhemos essa brincadeira pra
          vocês participarem conosco desse momento tão especial.
          <br />
          <br />
          Um pacote de fralda e um pouco de sorte podem te render um voucher do
          iFood!
        </p>
      </div>
    </section>
  );
}
