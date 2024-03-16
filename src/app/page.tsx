import Image from "next/image";

export default function Home() {
  return (
    <main>
      <header className="flex flex-col gap-8 pb-10">
        <h1 className="flex flex-col gap-3 text-center">
          <span className="font-heading text-3xl text-gray">
            Bolão da chegada
          </span>
          <span className="font-calligraphy text-5xl text-brown">Theo</span>
        </h1>

        <div className="flex flex-col gap-8">
          <Image
            src="/axolotl.png"
            width={445}
            height={319}
            alt="An axolotl"
            className="mx-auto pb-4"
          />

          <p className="font-serif text-xl text-gray">
            Bem vindo ao Bolão da Chegada do Theo! Escolhemos essa brincadeira
            pra vocês participarem conosco desse momento tão especial.
          </p>

          <p className="font-serif text-xl text-gray">
            Um pacote de fralda e um pouco de sorte podem te render um voucher
            do iFood!
          </p>
        </div>

        <Image
          src="/separator.png"
          width={50}
          height={50}
          alt="A starfish"
          className="mx-auto"
        />
      </header>

      <section>
        <h2 className="font-calligraphy text-2xl text-brown">Regulamento</h2>
      </section>
    </main>
  );
}
