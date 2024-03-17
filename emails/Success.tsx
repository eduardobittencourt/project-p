import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Tailwind,
  Text,
} from "@react-email/components";

export const MyEmail = () => {
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
              src="https://www.theo.gift/axolotl.png"
              alt="An axolotl"
              width="445"
              height="319"
            />

            <Text className="text-xl text-gray">
              Obrigada por topar essa brincadeira conosco! Ficamos super felizes
              em dividir esse momento mágico com você.
            </Text>

            <Text className="text-xl text-gray">
              Agora é só esperar a vontade do Theo e torcer pro seu palpite ser
              o correto.
            </Text>

            <Text className="text-xl text-gray">Boa sorte!</Text>
          </Container>
        </Tailwind>
      </Body>
    </Html>
  );
};

export default MyEmail;
