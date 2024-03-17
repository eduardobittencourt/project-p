import { Calendar } from "@/components/Calendar";
import { Divider } from "@/components/Divider";
import { Footer } from "@/components/Footer";
import { Form } from "@/components/Form";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Rules } from "@/components/Rules";
import { ShoppingList } from "@/components/ShoppingList";

export default function Home() {
  const saveDate = async (formData: FormData) => {
    "use server";

    const formValues = Object.fromEntries(formData.entries());

    console.log(formValues);
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
