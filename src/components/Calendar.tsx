import { CalendarCell } from "./CalendarCell";

function CalendarHeader() {
  return (
    <>
      <span className="pb-4 font-heading text-xl">D</span>
      <span className="pb-4 font-heading text-xl">S</span>
      <span className="pb-4 font-heading text-xl">T</span>
      <span className="pb-4 font-heading text-xl">Q</span>
      <span className="pb-4 font-heading text-xl">Q</span>
      <span className="pb-4 font-heading text-xl">S</span>
      <span className="pb-4 font-heading text-xl">S</span>
    </>
  );
}

export function Calendar() {
  return (
    <section id="calendar" className="flex flex-col gap-8 pt-10">
      <h3 className="text-center font-calligraphy text-3xl text-brown">
        Junho
      </h3>

      <div className="grid grid-cols-7 place-content-center place-items-center">
        <CalendarHeader />

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

      <div className="h-px w-full border-b border-dashed border-b-yellow" />

      <h3 className="text-center font-calligraphy text-3xl text-brown">
        Julho
      </h3>

      <div className="grid grid-cols-7 place-content-center place-items-center">
        <CalendarHeader />

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

      <div className="flex items-center justify-around gap-2">
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
    </section>
  );
}
