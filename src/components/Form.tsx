type FormProps = Readonly<{ date: string }>;

export function Form({ date }: FormProps) {
  return (
    <section className="flex flex-col gap-8">
      <h2 className="text-center font-calligraphy text-3xl text-brown md:text-left md:text-6xl">
        Sua escolha
      </h2>

      <span className="font-serif text-xl text-gray md:text-2xl">
        Data escolhida: {date}
      </span>

      <div className="flex items-center gap-2">
        <label
          htmlFor="name"
          className="pb-1 font-serif text-xl text-gray md:text-2xl"
        >
          Nome:
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className="w-full appearance-none rounded-none border-b border-transparent bg-background font-calligraphy text-xl text-gray outline-none transition-colors focus:border-gray md:text-2xl"
        />
      </div>

      <div className="flex items-center gap-2">
        <label
          htmlFor="email"
          className="pb-1 font-serif text-xl text-gray md:text-2xl"
        >
          Email:
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="w-full appearance-none rounded-none border-b border-transparent bg-background font-calligraphy text-xl text-gray outline-none transition-colors focus:border-gray md:text-2xl"
        />
      </div>

      <button
        type="submit"
        className="rounded-xl bg-brown p-2 text-center font-heading text-xl text-white md:self-center md:px-8"
      >
        Confirmar
      </button>
    </section>
  );
}
