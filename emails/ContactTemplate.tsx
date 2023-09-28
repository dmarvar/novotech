import { Html } from "@react-email/html";
import { Text } from "@react-email/text";
import { Section } from "@react-email/section";
import { Container } from "@react-email/container";
import { Email_contact } from "@/types";

export default function WelcomeEmail(props: Email_contact) {
  const { name, email, message } = props;
  return (
    <Html>
      <Section style={main}>
        <Container style={container}>
          <Text style={heading}>Hola Equipo!</Text>
          <Text style={paragraph}>
            Nos contactaron del sitio web, a continuación los datos del usuario:
          </Text>
          <Text style={paragraph}>Nombre: {name}</Text>
          <Text style={paragraph}>Email: {email}</Text>
          <Text style={paragraph}>Mensaje: {message}</Text>
        </Container>
      </Section>
    </Html>
  );
}

// Styles for the email template
const main = {
  backgroundColor: "#ffffff",
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
};

const heading = {
  fontSize: "32px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
};

const paragraph = {
  fontSize: "18px",
  lineHeight: "1.4",
  color: "#484848",
};
