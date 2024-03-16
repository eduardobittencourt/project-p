import Image from "next/image";

export default function Home() {
  return (
    <main>
      <header>
        <h1 className="flex flex-col gap-4 text-center">
          <span className="font-heading text-gray text-2xl">
            Bolão da chegada
          </span>
          <span className="text-brown font-calligraphy text-5xl">Theo</span>
        </h1>

        <div>
          <Image
            src="/axolotl.png"
            width={500}
            height={500}
            alt="An axolotl"
            className="mx-auto"
          />

          <p className="font-serif text-gray mb-8 text-lg">
            Bem vindo ao Bolão da Chegada do Theo! Escolhemos essa brincadeira
            pra vocês participarem conosco desse momento tão especial.
          </p>

          <p className="font-serif text-gray mb-8 text-lg">
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
    </main>
  );
}
