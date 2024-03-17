import Link from "next/link";

export function ShoppingList() {
  return (
    <section className="flex flex-col gap-8">
      <h2 className="text-center font-calligraphy text-3xl text-brown">
        Vamos lá?
      </h2>

      <p className="font-serif text-xl text-gray">
        Basta escolher uma fralda da nossa lista da Amazon, selecionar a data
        que você escolheu, preencher seus dados e esperar a vontade do Theo :)
      </p>

      <p className="font-serif text-xl text-gray">
        Ah, se quiser escolher outros itens da lista fique a vontade, baby Theo
        agradece.
      </p>

      <Link
        className="rounded-xl bg-brown p-2 text-center font-heading text-xl text-white"
        href="https://www.amazon.com.br/baby-reg/letcia-manzoli-eduardo-bittencourt-julho-2024-portoalegre/GMM40NRR9425"
      >
        Lista da Amazon
      </Link>
    </section>
  );
}
