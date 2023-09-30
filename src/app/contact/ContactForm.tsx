"use client";
import { FormEvent, useState } from "react";
import config from "@/config/config.json";
import { schema as contactFormSchema } from "@/schemas/contactForm.schema";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Email_contact } from "@/types";

export enum ContactErrors {
  NONE,
  EMAIL_NULL,
  EMAIL_BAD_FORMAT,
  NAME_NULL,
  NAME_BAD_FORMAT,
  MESSAGE_NULL,
  MESSAGE_BAD_FORMAT,
}

export type ContactData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const { email } = config.contact;
  const searchParams = useSearchParams();
  const [nameError, setNameError] = useState(ContactErrors.NONE);
  const [emailError, setEmailError] = useState(ContactErrors.NONE);
  const [messageError, setMessageError] = useState(ContactErrors.NONE);
  const [isLoading, setIsLoading] = useState(false);

  const isSuccess = searchParams.get("success") ?? null;

  function areThereNullValues(props: Email_contact) {
    setNameError(ContactErrors.NONE)
    setEmailError(ContactErrors.NONE)
    setMessageError(ContactErrors.NONE)

    if (props.name === '') {
      setNameError(ContactErrors.NAME_NULL);
      return true;
    }

    if (props.email === '') {
      setEmailError(ContactErrors.EMAIL_NULL);
      return true;
    }

    if (props.message === '') {
      setMessageError(ContactErrors.MESSAGE_NULL);
      return true;
    }

    return false;
  }

  function isTheFormatValid(props: Email_contact) {
    const validation = contactFormSchema.safeParse(props);

    if (!validation.success) {
      console.log(validation.error.errors);
      validation.error.errors.forEach((error) => {
        switch (error.path[0]) {
          case "name":
            setNameError(ContactErrors.NAME_BAD_FORMAT);
            break;
          case "email":
            setEmailError(ContactErrors.EMAIL_BAD_FORMAT);
            break;
          case "message":
            setMessageError(ContactErrors.MESSAGE_BAD_FORMAT);
            break;
          default:
            break;
        }
      });
      return false;
    }

    return true;
  }

  function getFormData(e: FormEvent) {
    const { value: name } = (e.target as HTMLElement).querySelector(
      "#name",
    ) as HTMLInputElement;
    const { value: email } = (e.target as HTMLElement).querySelector(
      "#email",
    ) as HTMLInputElement;
    const { value: message } = (e.target as HTMLElement).querySelector(
      "#message",
    ) as HTMLInputElement;

    const data: Email_contact = { name, email, message };
    return data
  }

  function getErrorMessage(error: ContactErrors) {
    switch (error) {
      case ContactErrors.NAME_NULL:
      case ContactErrors.EMAIL_NULL:
      case ContactErrors.MESSAGE_NULL:
        return "Ce champ est obligatoire";
      case ContactErrors.NAME_BAD_FORMAT:
        return "Saisissez une valeur comprise entre 2 et 50 caractères";
      case ContactErrors.EMAIL_BAD_FORMAT:
        return "Le format de l'e-mail n'est pas respecté";
      case ContactErrors.MESSAGE_BAD_FORMAT:
        return "Saisissez une valeur comprise entre 10 et 500 caractères";
      default:
        return "Erreur lors de la validation du champ"
    }
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const data: Email_contact = getFormData(e)

    setNameError(ContactErrors.NONE)
    setEmailError(ContactErrors.NONE)
    setMessageError(ContactErrors.NONE)

    if (areThereNullValues(data) || !isTheFormatValid(data)) {
      setIsLoading(false);
    } else {
      (e.currentTarget as HTMLFormElement).submit();
    }
  };

  return (
    <>
      <section className="section-sm">
        <div className="container">
          <div className="row">
            <div className="mx-auto md:col-10 lg:col-6">
              {isSuccess === "true" ? (
                <div className="flex items-center justify-center ">
                  <div className="text-center">
                    <p>Merci d&apos;avoir envoyé votre message!</p>
                    <p>
                      Notre équipe vous répondra dans les plus brefs délais.
                    </p>
                    <Link href="/contact" className="btn btn-primary mt-8">
                      Envoyer autre message
                    </Link>
                  </div>
                </div>
              ) : (
                <form
                  method="POST"
                  onSubmit={handleSubmit}
                  action={`${process.env.NEXT_PUBLIC_HOST}/api/send-mail`}
                >
                  <div className="mb-6">
                    {isSuccess === "false" && (
                      <div className=" text-center py-4 lg:px-4 mb-3">
                        <div
                          className="p-2 border-red-200 border-2 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
                          role="alert"
                        >
                          <span className="flex rounded-full bg-red-800 uppercase px-2 py-1 text-xs font-bold mr-3">
                            Alerte
                          </span>
                          <span className="font-semibold mr-2 text-left flex-auto">
                            <p>Nous n&lsquo;avons pas pu envoyer votre message. </p>
                            <br />
                            <p>Veuillez réessayer ultérieurement ou l&lsquo;envoyer à notre adresse mail de contact : {email}.</p>
                          </span>
                        </div>
                      </div>
                    )}
                    <label htmlFor="name" className="form-label">
                      Nom <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      className={`form-input ${nameError != ContactErrors.NONE ? "border-red-500" : ""}`}
                      placeholder="Votre nom"
                      type="text"
                      aria-invalid={nameError != ContactErrors.NONE}
                      aria-describedby={nameError != ContactErrors.NONE ? "name-error" : undefined}
                    />
                    {nameError != ContactErrors.NONE && (
                      <div id="name-error" className="text-red-500">
                        {getErrorMessage(nameError)}
                      </div>
                    )}
                  </div>
                  <div className="mb-6">
                    <label htmlFor="email" className="form-label">
                      E-mail <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      className={`form-input ${emailError != ContactErrors.NONE ? "border-red-500" : ""}`}
                      placeholder="Votre email"
                      type="email"
                      aria-invalid={emailError != ContactErrors.NONE}
                      aria-describedby={emailError != ContactErrors.NONE ? "email-error" : undefined}
                    />
                    {emailError != ContactErrors.NONE && (
                      <div id="email-error" className="text-red-500">
                        {getErrorMessage(emailError)}
                      </div>
                    )}
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="form-label">
                      Votre message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className={`form-input ${messageError != ContactErrors.NONE ? "border-red-500" : ""}`}
                      placeholder="Votre message"
                      rows={8}
                      aria-invalid={messageError != ContactErrors.NONE}
                      aria-describedby={
                        messageError != ContactErrors.NONE ? "message-error" : undefined
                      }
                    />
                    {messageError != ContactErrors.NONE && (
                      <div id="message-error" className="text-red-500">
                        {getErrorMessage(messageError)}
                      </div>
                    )}

                  </div>
                  <button
                    type="submit"
                    className={`btn btn-primary ${isLoading && "opacity-50"}`}
                    disabled={isLoading}
                  >
                    {isLoading ? "Envoi en cours..." : "Envoyer"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
