"use client";
import { FormEvent, useState } from "react";
import config from "@/config/config.json";
import { schema as contactFormSchema } from "@/schemas/contactForm.schema";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const ContactForm = () => {
  const { email } = config.contact;
  const searchParams = useSearchParams();
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isSuccess = searchParams.get("success") ?? null;

  const handleNewMessage = () => {
    setNameError(true);
    setEmailError(true);
    setMessageError(true);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const { value: name } = (e.target as HTMLElement).querySelector(
      "#name",
    ) as HTMLInputElement;
    const { value: email } = (e.target as HTMLElement).querySelector(
      "#email",
    ) as HTMLInputElement;
    const { value: message } = (e.target as HTMLElement).querySelector(
      "#message",
    ) as HTMLInputElement;

    const data = { name, email, message };
    const validation = contactFormSchema.safeParse(data);

    if (!validation.success) {
      console.log(validation.error.errors);
      validation.error.errors.forEach((error) => {
        switch (error.path[0]) {
          case "name":
            setNameError(true);
            break;
          case "email":
            setEmailError(true);
            break;
          case "message":
            setMessageError(true);
            break;
          default:
            break;
        }
      });
      return;
    }

    (e.currentTarget as HTMLFormElement).submit();
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
                            On n&lsquo;a pas pu envoyer le formulaire. Essayez
                            plus tard.
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
                      className={`form-input ${
                        nameError ? "border-red-500" : ""
                      }`}
                      placeholder="Votre nom"
                      type="text"
                      aria-invalid={nameError}
                      aria-describedby={nameError ? "name-error" : undefined}
                    />
                    {nameError && (
                      <div id="name-error" className="text-red-500">
                        Ce champ est obligatoire
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
                      className={`form-input ${
                        emailError ? "border-red-500" : ""
                      }`}
                      placeholder="Votre email"
                      type="email"
                      aria-invalid={emailError}
                      aria-describedby={emailError ? "email-error" : undefined}
                    />
                    {emailError && (
                      <div id="email-error" className="text-red-500">
                        Ce champ est obligatoire
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
                      className={`form-input ${
                        messageError ? "border-red-500" : ""
                      }`}
                      placeholder="Votre message"
                      rows={8}
                      aria-invalid={messageError}
                      aria-describedby={
                        messageError ? "message-error" : undefined
                      }
                    />
                    {messageError && (
                      <div id="message-error" className="text-red-500">
                        Ce champ est obligatoire
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
