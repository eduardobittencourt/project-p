import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section>
        <h1 className="text-center text-4xl">Quando o Theo vem?</h1>

        <Image
          src="/axolotl.png"
          width={500}
          height={500}
          alt="An axolotl"
          className="mx-auto"
        />

        <table className="mx-auto my-20">
          <thead className="text-2xl text-[#707474]">
            <tr>
              <th>Dom</th>
              <th>Seg</th>
              <th>Ter</th>
              <th>Qua</th>
              <th>Qui</th>
              <th>Sex</th>
              <th>Sab</th>
            </tr>
          </thead>

          <tbody className="text-4xl">
            <tr className="my-4">
              <td className="p-8">16/06</td>
              <td className="p-8">17/06</td>
              <td className="p-8">18/06</td>
              <td className="p-8">19/06</td>
              <td className="p-8">20/06</td>
              <td className="p-8">21/06</td>
              <td className="p-8">22/06</td>
            </tr>
            <tr className="my-4">
              <td className="p-8">23/06</td>
              <td className="p-8">24/06</td>
              <td className="p-8">25/06</td>
              <td className="p-8">26/06</td>
              <td className="p-8">27/06</td>
              <td className="p-8">28/06</td>
              <td className="p-8">29/06</td>
            </tr>
            <tr className="my-4">
              <td className="p-8">30/06</td>
              <td className="p-8">01/07</td>
              <td className="p-8">02/07</td>
              <td className="p-8">03/07</td>
              <td className="p-8">04/07</td>
              <td className="p-8">05/07</td>
              <td className="p-8">06/07</td>
            </tr>
            <tr className="my-4">
              <td className="p-8">07/07</td>
              <td className="p-8">08/07</td>
              <td className="p-8">09/07</td>
              <td className="p-8">10/07</td>
              <td className="p-8">11/07</td>
              <td className="p-8">12/07</td>
              <td className="p-8">13/07</td>
            </tr>
          </tbody>
        </table>

        <div className="flex items-center justify-center gap-2">
          <h2 className="text-2xl">Meu nome é</h2>
          <input type="text" className="border-b text-2xl" />
        </div>

        <div className="flex justify-center py-2">
          <button className="mx-auto text-2xl">Salvar</button>
        </div>
      </section>
    </main>
  );
}
