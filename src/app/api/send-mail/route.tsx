import { Resend } from "resend";
import ContactTemplate from "@/emails/ContactTemplate";
import { NextResponse } from "next/server";
import { CreateEmailResponse } from "resend/build/src/emails/interfaces";
import { schema as contactFormSchema } from "@/schemas/contactForm.schema";
import * as z from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ExtendedResponseResend extends CreateEmailResponse {
  // The resend interface is not complete, so we need to extend it when errors happen
  statusCode?: number;
  message?: string;
  name?: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
  errors?: z.ZodIssue[];
}

export async function POST(
  request: Request,
): Promise<NextResponse<ApiResponse | unknown>> {
  const formData = await request.formData();
  const name = formData.get("name") as string | null;
  const email = formData.get("email") as string | null;
  const message = formData.get("message") as string | null;

  const validation = contactFormSchema.safeParse({ name, email, message });

  if (!validation.success)
    return NextResponse.redirect(
      new URL("/contact?success=false", request.url),
      { status: 301 },
    );

  const response: ExtendedResponseResend = await resend.emails.send({
    from: "contact@leandev.fr",
    to: ["diegomartinez324@gmail.com", "heryjlr@gmail.com"],
    subject: "Hola! Nuevo mensaje desde el sitio web",
    react: <ContactTemplate name={name!} email={email!} message={message!} />,
  });

  if (!!response.statusCode)
    return NextResponse.redirect(
      new URL("/contact?success=false", request.url),
      { status: 301 },
    );

  return NextResponse.redirect(new URL("/contact?success=true", request.url), {
    status: 301,
  });
}
