import Link from "next/link";

export function ShoppingList() {
  return (
    <section className="flex flex-col gap-8">
      <h2 className="text-center font-calligraphy text-3xl text-brown md:text-left md:text-6xl">
        Vamos lá?
      </h2>

      <p className="font-serif text-xl text-gray md:text-2xl">
        Basta escolher uma fralda da nossa lista da Amazon, selecionar a data,
        preencher seus dados e esperar a vontade do Theo :)
        <br />
        <br />
        Ah, se quiser adicionar outros itens da lista fique à vontade, baby Theo
        agradece.
      </p>

      <Link
        className="rounded-xl bg-brown p-2 text-center font-heading text-xl text-white md:self-center md:px-8"
        href="https://www.amazon.com.br/baby-reg/letcia-manzoli-eduardo-bittencourt-julho-2024-portoalegre/GMM40NRR9425"
        target="_blank"
      >
        Lista da Amazon
      </Link>
    </section>
  );
}
