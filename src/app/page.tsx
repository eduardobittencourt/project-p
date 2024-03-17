import { Calendar } from "@/components/Calendar";
import { Divider } from "@/components/Divider";
import { Footer } from "@/components/Footer";
import { Form } from "@/components/Form";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Rules } from "@/components/Rules";
import { ShoppingList } from "@/components/ShoppingList";
import { dates as datesSchema, db, insertDateSchema } from "@/db";
import { resend } from "@/email";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import Success from "../../emails/Success";

export default async function Home() {
  const saveDate = async (formData: FormData) => {
    "use server";

    const formValues = Object.fromEntries(formData.entries());
    const date = insertDateSchema.parse(formValues);

    await db.insert(datesSchema).values(date);

    await resend.emails.send({
      from: "Theo Manzoli Bittencourt <sucesso@oi.theo.gift>",
      to: [date.email],
      subject: "Obrigado por participar do bolão!",
      react: <Success date={date.date} name={date.name} />,
    });

    revalidatePath("/");

    redirect("/sucesso");
  };

  return (
    <main className="container mx-auto bg-background px-8 py-16">
      <Header />
      <Hero />
      <Divider />
      <Rules />
      <Divider />
      <ShoppingList />
      <form action={saveDate}>
        <Calendar />
        <Divider />
        <Form />
      </form>
      <Footer />
    </main>
  );
}
