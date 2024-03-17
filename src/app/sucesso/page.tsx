import Image from "next/image";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="container mx-auto bg-background px-8 py-16">
      <header className="flex flex-col gap-8">
        <h1 className="text-center font-calligraphy text-6xl text-brown">
          Obrigado!
        </h1>

        <Image
          src="/axolotl-2.png"
          width={500}
          height={500}
          alt="An axolotl"
          className="mx-auto pb-4"
        />
      </header>

      <section className="flex flex-col gap-8">
        <p className="font-serif text-xl text-gray">
          Obrigada por topar essa brincadeira conosco! Ficamos super felizes em
          dividir esse momento mágico com você.
        </p>
        <p className="font-serif text-xl text-gray">
          Agora é só esperar a vontade do Theo e torcer pro seu palpite ser o
          correto.
        </p>
        <p className="font-serif text-xl text-gray">Boa sorte!</p>

        <Link
          className="rounded-xl bg-brown p-2 text-center font-heading text-xl text-white"
          href="https://www.amazon.com.br/baby-reg/letcia-manzoli-eduardo-bittencourt-julho-2024-portoalegre/GMM40NRR9425"
        >
          Lista da Amazon
        </Link>

        <Link
          className="rounded-xl bg-brown p-2 text-center font-heading text-xl text-white"
          href="/"
        >
          Voltar para a Home
        </Link>
      </section>
    </main>
  );
}
