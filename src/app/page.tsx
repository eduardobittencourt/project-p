import { CalendarCell } from "@/components/CalendarCell";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const saveBet = async (formData: FormData) => {
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
            <h3 className="py-8 text-center font-calligraphy text-3xl text-brown">
              Junho
            </h3>
            <div className="grid grid-cols-7 place-content-center place-items-center">
              <span className="pb-4 font-heading text-xl">D</span>
              <span className="pb-4 font-heading text-xl">S</span>
              <span className="pb-4 font-heading text-xl">T</span>
              <span className="pb-4 font-heading text-xl">Q</span>
              <span className="pb-4 font-heading text-xl">Q</span>
              <span className="pb-4 font-heading text-xl">S</span>
              <span className="pb-4 font-heading text-xl">S</span>
              <div />

              <CalendarCell value="17/06" label="17" />
              <CalendarCell value="18/06" label="18" />
              <CalendarCell value="19/06" label="19" />
              <CalendarCell value="20/06" label="20" />
              <CalendarCell value="21/06" label="21" />
              <CalendarCell value="22/06" label="22" />
              <CalendarCell value="23/06" label="23" />
              <CalendarCell value="24/06" label="24" />
              <CalendarCell value="25/06" label="25" />
              <CalendarCell value="26/06" label="26" />
              <CalendarCell value="27/06" label="27" />
              <CalendarCell value="28/06" label="28" />
              <CalendarCell value="29/06" label="29" />
              <CalendarCell value="30/06" label="30" />
            </div>
          </div>

          <div className="h-1 w-full border-b border-dashed border-b-yellow" />

          <div>
            <h3 className="py-8 text-center font-calligraphy text-3xl text-brown">
              Julho
            </h3>
            <div className="grid grid-cols-7 place-content-center place-items-center">
              <span className="pb-4 font-heading text-xl">D</span>
              <span className="pb-4 font-heading text-xl">S</span>
              <span className="pb-4 font-heading text-xl">T</span>
              <span className="pb-4 font-heading text-xl">Q</span>
              <span className="pb-4 font-heading text-xl">Q</span>
              <span className="pb-4 font-heading text-xl">S</span>
              <span className="pb-4 font-heading text-xl">S</span>
              <div />

              <CalendarCell value="01/07" label="01" />
              <CalendarCell value="02/07" label="02" />
              <CalendarCell value="03/07" label="03" />
              <CalendarCell value="04/07" label="04" />
              <CalendarCell value="05/07" label="05" />
              <CalendarCell value="06/07" label="06" />
              <CalendarCell value="07/07" label="07" />
              <CalendarCell value="08/07" label="08" />
              <CalendarCell value="09/07" label="09" />
              <CalendarCell value="10/07" label="10" />
              <CalendarCell value="11/07" label="11" />
              <CalendarCell value="12/07" label="12" />
              <CalendarCell value="13/07" label="13" />
              <CalendarCell value="14/07" label="14" />
            </div>
          </div>

          <div className="flex items-center justify-between gap-2 pt-4">
            <div className="flex flex-col items-center">
              <span className="text-xl text-gray">&#9733;</span>
              <span className="font-serif text-xl text-gray">disponível</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl text-lightGray">&#9733;</span>
              <span className="font-serif text-xl text-gray">indisponível</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl text-brown">&#9733;</span>
              <span className="font-serif text-xl text-gray">selecionada</span>
            </div>
          </div>

          <Image
            src="/separator.png"
            width={50}
            height={50}
            alt="A starfish"
            className="mx-auto py-8"
          />

          <h2 className="pb-4 text-center font-calligraphy text-3xl text-brown">
            Sua escolha
          </h2>

          <button
            type="submit"
            className="w-full rounded-xl bg-brown p-2 text-center font-heading text-xl text-white"
          >
            Confirmar
          </button>
        </form>
      </section>

      <footer className="pb-8 pt-20">
        <p className="text-center font-serif text-xl text-gray">
          &#169; Manzoli Bittencourt. Favor não copiar
        </p>
      </footer>
    </main>
  );
}
