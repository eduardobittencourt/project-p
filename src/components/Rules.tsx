export function Rules() {
  return (
    <section className="flex flex-col gap-8">
      <h2 className="text-center font-calligraphy text-3xl text-brown md:text-left md:text-6xl">
        Regulamento
      </h2>

      <p className="font-serif text-xl text-gray md:text-2xl">
        <span className="text-brown">Participação:</span> Cada pacote de fralda
        dá direito ao participante de escolher uma data de nascimento.
        <br />
        <br />
        <span className="text-brown">Prazo de 24 horas:</span> Se o participante
        escolher uma data, mas não confirmar a compra do pacote de fraldas
        dentro de 24 horas, a data escolhida será liberada para outros
        participantes.
        <br />
        <br />
        <span className="text-brown">Confirmação da escolha:</span> Assim que a
        compra da fralda for efetuada (via Amazon) sua participação estará
        confirmada.
        <br />
        <br />
        <span className="text-brown">Prêmio para quem acertar:</span> O
        participante que acertar a data de nascimento do Theo ganhará um voucher
        do iFood no valor de R$150.
      </p>
    </section>
  );
}
