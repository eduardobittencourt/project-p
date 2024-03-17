import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Tailwind,
  Text,
} from "@react-email/components";

export type SuccessProps = {
  date: string;
  name: string;
};

export const Success = ({ date, name }: SuccessProps) => {
  return (
    <Html>
      <Head />
      <Body>
        <Tailwind
          config={{
            theme: {
              fontFamily: {
                default:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
                serif: "serif",
              },
              colors: {
                transparent: "transparent",
                white: "#ffffff",
                background: "#FFFDFB",
                brown: "#af7e55",
                yellow: "#ebcd94",
                gray: "#707474",
                lightGray: "#D9D9D9",
              },
            },
          }}
        >
          <Container className="font-default">
            <Heading className="text-center text-4xl text-brown">
              Obrigado!
            </Heading>

            <Img
              src="https://www.theo.gift/axolotl-2.png"
              alt="An axolotl"
              width="300"
              height="300"
              className="mx-auto mb-10"
            />

            <Text className="mx-auto font-serif text-lg text-gray">
              Obrigado por topar essa brincadeira conosco! Ficamos super felizes
              em dividir esse momento mágico com você.
            </Text>

            <Text className="mx-auto font-serif text-lg text-gray">
              Agora é só esperar a vontade do Theo e torcer pro seu palpite ser
              o correto.
            </Text>

            <Text className="mx-auto font-serif text-lg text-gray">
              Boa sorte!
            </Text>

            <Heading className="font-default mx-auto pt-4 text-center text-2xl text-brown">
              Suas informações
            </Heading>

            <Text className="mx-auto font-serif text-lg text-gray">
              Nome: {name}
            </Text>

            <Text className="mx-auto font-serif text-lg text-gray">
              Data: {date}
            </Text>

            <Hr />

            <Text className="mx-auto text-center font-serif text-sm text-gray">
              &#169; Manzoli Bittencourt. Favor não copiar
            </Text>
          </Container>
        </Tailwind>
      </Body>
    </Html>
  );
};

export default Success;
