import { Html } from "@react-email/html";
import { Text } from "@react-email/text";
import { Section } from "@react-email/section";
import { Container } from "@react-email/container";
import { TContactForm } from "@/schemas/contactForm.schema";
import { Img } from "@react-email/img";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export default function WelcomeEmail(props: { contact: TContactForm }) {
  const { contact } = props;
  const imageUrl = `${baseUrl}/images/logo_email.png`;
  const { name, email, message, companyName, type, companyDivision } =
    contact ?? {};
  return (
    <Html>
      <Section style={main}>
        <Container style={container}>
          <Section>
            <Img
              src={imageUrl}
              alt="LeanDev Logo"
              width="180"
              height="150"
              style={logoImage}
            />
          </Section>
          <Text style={heading}>Hola Equipo!</Text>
          <Text style={description}>
            Nos contactaron del sitio web, a continuación los datos del
            contacto:
          </Text>
          <Section style={box}>
            <Text style={paragraph}>Nombre: {name}</Text>
            <Text style={paragraph}>Email: {email}</Text>
            <Text style={paragraph}>Mensaje: {message}</Text>
            <Text style={paragraph}>Empresa: {companyName}</Text>
            <Text style={paragraph}>Tipo de problematica: {type}</Text>
            <Text style={paragraph}>Area funcional: {companyDivision}</Text>
          </Section>
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
  textAlign: "center" as any,
};

const paragraph = {
  fontSize: "18px",
  lineHeight: "1.4",
  color: "#484848",
};

const description = {
  ...paragraph,
  textAlign: "center" as any,
};

const box = {
  backgroundColor: "#f5f5f5",
  padding: "10px 20px",
  borderRadius: "10px",
};

const logoImage = {
  margin: "0 auto",
  marginBottom: "16px",
};
