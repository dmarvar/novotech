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
  const body = await request.json();
  const validation = contactFormSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(
      { errors: validation.error.format() },
      { status: 400 },
    );

  const response: ExtendedResponseResend = await resend.emails.send({
    from: "contact@leandev.fr",
    to: ["diegomartinez324@gmail.com", "heryjlr@gmail.com"],
    subject: "Hola! Nuevo mensaje desde el sitio web",
    react: <ContactTemplate contact={body} />,
  });

  if (!!response.statusCode)
    return NextResponse.json(
      { errors: { _errors: ["The message could not been sent"] } },
      { status: 400 },
    );

  return NextResponse.json(
    { success: true, message: "Email sent" },
    {
      status: 200,
    },
  );
}
