import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const saveBet = async (formData) => {
    "use server";

    console.log(formData.get("date"));
  };
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

      <section className="flex flex-col gap-6 pb-10">
        <h2 className="pb-4 text-center font-calligraphy text-3xl text-brown">
          Regulamento
        </h2>

        <p className="font-serif text-xl text-gray">
          Participação: Cada pacote de fralda dá direito ao participante de
          escolher uma data de nascimento para o Theo.
        </p>
        <p className="font-serif text-xl text-gray">
          Prazo de 24 horas: Se o participante escolher uma data, mas não
          concluir a confirmação de compra do pacote de fraldas dentro de 24
          horas, a data escolhida será liberada novamente para outros
          participantes.
        </p>
        <p className="font-serif text-xl text-gray">
          Confirmação da escolha: Assim que a compra da fralda for efetuada (via
          Amazon) sua participação estará confirmada
        </p>
        <p className="font-serif text-xl text-gray">
          Prêmio para quem acertar: O participante que acertar a data de
          nascimento do bebê ganhará um voucher do iFood no valor de R$150.
        </p>

        <Image
          src="/separator.png"
          width={50}
          height={50}
          alt="A starfish"
          className="mx-auto"
        />
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="pb-4 text-center font-calligraphy text-3xl text-brown">
          Vamos lá?
        </h2>

        <p className="font-serif text-xl text-gray">
          Basta escolher uma fralda da nossa lista da Amazon, selecionar a data
          que você escolheu, preencher seus dados e esperar a vontade do Theo :)
        </p>

        <Link
          className="rounded-xl bg-brown p-2 text-center font-heading text-xl text-white"
          href="https://www.amazon.com.br/baby-reg/letcia-manzoli-eduardo-bittencourt-julho-2024-portoalegre/GMM40NRR9425"
        >
          Lista da Amazon
        </Link>

        <p className="font-serif text-xl text-gray">
          Ah, se quiser escolher outros itens da lista fique a vontade, baby
          Theo agradece.
        </p>
      </section>

      <section>
        <form action={saveBet}>
          <div>
            <h3>Junho</h3>
            <div className="grid grid-cols-7 gap-2">
              <div>D</div>
              <div>S</div>
              <div>T</div>
              <div>Q</div>
              <div>Q</div>
              <div>S</div>
              <div>S</div>
              <div />
              <div>
                <label htmlFor="17/06">
                  <input
                    type="radio"
                    name="date"
                    value="17/06"
                    id="17/06"
                    className="peer hidden"
                  />
                  <span className="font-serif text-gray peer-checked:text-brown peer-disabled:text-lightGray">
                    17
                  </span>
                </label>
              </div>
              <div>
                <label htmlFor="18/06">
                  <input
                    type="radio"
                    name="date"
                    value="18/06"
                    id="18/06"
                    className="hidden"
                  />
                  <span>18</span>
                </label>
              </div>
              <div>
                <label htmlFor="19/06">
                  <input
                    type="radio"
                    name="date"
                    value="19/06"
                    id="19/06"
                    className="hidden"
                  />
                  <span>19</span>
                </label>
              </div>
              <div>
                <label htmlFor="20/06">
                  <input
                    type="radio"
                    name="date"
                    value="20/06"
                    id="20/06"
                    className="hidden"
                  />
                  <span>20</span>
                </label>
              </div>
            </div>
          </div>

          <button type="submit">enviar</button>
        </form>
      </section>
    </main>
  );
}
