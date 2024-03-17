export function Form() {
  return (
    <section className="flex flex-col gap-8">
      <h2 className="text-center font-calligraphy text-3xl text-brown">
        Sua escolha
      </h2>

      <div className="flex items-center gap-2">
        <label htmlFor="name" className="pb-1 font-serif text-xl text-gray">
          Nome:
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className="w-full appearance-none rounded-none border-b border-transparent bg-background font-calligraphy text-xl text-gray outline-none transition-colors focus:border-gray"
        />
      </div>

      <div className="flex items-center gap-2">
        <label htmlFor="email" className="pb-1 font-serif text-xl text-gray">
          Email:
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="w-full appearance-none rounded-none border-b border-transparent bg-background font-calligraphy text-xl text-gray outline-none transition-colors focus:border-gray"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-xl bg-brown p-2 text-center font-heading text-xl text-white"
      >
        Confirmar
      </button>
    </section>
  );
}
