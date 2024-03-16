import Image from "next/image";

export default function Home() {
  return (
    <main>
      <header>
        <h1 className="flex flex-col gap-4 text-center">
          <span className="font-heading text-2xl text-gray">
            Bolão da chegada
          </span>
          <span className="font-calligraphy text-5xl text-brown">Theo</span>
        </h1>

        <div>
          <Image
            src="/axolotl.png"
            width={500}
            height={500}
            alt="An axolotl"
            className="mx-auto"
          />

          <p className="mb-8 font-serif text-lg text-gray">
            Bem vindo ao Bolão da Chegada do Theo! Escolhemos essa brincadeira
            pra vocês participarem conosco desse momento tão especial.
          </p>

          <p className="mb-8 font-serif text-lg text-gray">
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
