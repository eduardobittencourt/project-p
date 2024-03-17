import Image from "next/image";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="container mx-auto bg-background px-8 py-16">
      <header>
        <h1 className="text-center font-calligraphy text-6xl text-brown md:text-8xl">
          Obrigado!
        </h1>
      </header>

      <section className="grid items-center gap-8 pt-10 md:grid-cols-2">
        <Image
          src="/axolotl-2.png"
          width={500}
          height={500}
          alt="An axolotl"
          className="mx-auto pb-4"
        />

        <p className="font-serif text-xl text-gray md:text-2xl">
          Obrigado por topar essa brincadeira conosco! Ficamos super felizes em
          dividir esse momento mágico com você.
          <br />
          <br />
          Agora é só esperar a vontade do Theo e torcer pro seu palpite ser o
          correto.
          <br />
          <br />
          Boa sorte!
        </p>

        <div className="flex flex-col justify-center gap-8 md:col-span-2 md:flex-row">
          <Link
            className="rounded-xl bg-brown p-2 text-center font-heading text-xl text-white md:self-center md:px-8"
            href="https://www.amazon.com.br/baby-reg/letcia-manzoli-eduardo-bittencourt-julho-2024-portoalegre/GMM40NRR9425"
          >
            Lista da Amazon
          </Link>

          <Link
            className="rounded-xl bg-brown p-2 text-center font-heading text-xl text-white md:self-center md:px-8"
            href="/"
          >
            Voltar para a Home
          </Link>
        </div>
      </section>
    </main>
  );
}
