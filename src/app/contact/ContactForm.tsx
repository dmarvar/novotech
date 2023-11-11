"use client";
import { useState } from "react";
import config from "@/config/config.json";
import {
  TContactForm,
  schema as contactFormSchema,
} from "@/schemas/contactForm.schema";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

const companyDivisions = [
  "Direction générale",
  "Ressources humaines",
  "Finances",
  "Vente et marketing",
  "Production ou opérations",
  "Recherche et développement",
  "Service client",
  "Informatique et technologies de l'information",
  "Juridique",
  "Logistique et chaîne d'approvisionnement",
  "Qualité",
  "Communication interne",
  "Autre",
];

const typeOfProblems = ["Couts", "Temps", "Qualité", "Autre"];

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<TContactForm>({
    resolver: zodResolver(contactFormSchema),
  });

  const router = useRouter();
  const { email } = config.contact;
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const isSuccess = searchParams.get("success") ?? null;

  return (
    <>
      <section className="section-sm">
        <div className="container">
          <div className="row">
            <div className="mx-auto md:col-10 lg:col-6">
              {isSuccess === "true" ? (
                <div className="flex items-center justify-center min-h-full">
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
                  onSubmit={handleSubmit(async (data) => {
                    setIsLoading(true);
                    console.log(data);
                    try {
                      await axios.post(
                        `${process.env.NEXT_PUBLIC_HOST}/api/send-mail`,
                        data,
                      );
                      router.push("/contact?success=true");
                    } catch (error) {
                      console.error(error);
                      router.push("/contact?success=false");
                    }
                    setIsLoading(false);
                  })}
                >
                  <div className="mb-6">
                    {isSuccess === "false" && (
                      <div className=" text-center py-4 mb-3">
                        <div
                          className="p-2 border-red-200 border-2 items-center text-indigo-100 leading-none rounded-sm flex lg:inline-flex"
                          role="alert"
                        >
                          <span className="flex rounded-full bg-red-800 uppercase px-2 py-1 text-xs font-bold mr-3">
                            Alerte
                          </span>
                          <span className="font-semibold mr-2 text-left flex-auto">
                            <p>
                              Nous n&lsquo;avons pas pu envoyer votre message.{" "}
                            </p>
                            <br />
                            <p>
                              Veuillez réessayer ultérieurement ou
                              l&lsquo;envoyer à notre adresse mail de contact :{" "}
                              {email}.
                            </p>
                          </span>
                        </div>
                      </div>
                    )}
                    <label htmlFor="name" className="form-label">
                      Nom <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      className={`form-input mb-1 ${
                        errors.name ? "border-red-500" : ""
                      }`}
                      placeholder="Votre nom"
                      type="text"
                      {...register("name")}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name?.message}
                    />
                    {errors.name && (
                      <div id="name-error" className="text-red-500">
                        {errors.name.message}
                      </div>
                    )}
                  </div>
                  <div className="mb-6">
                    <label htmlFor="email" className="form-label">
                      E-mail <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      {...register("email")}
                      className={`form-input mb-1 ${
                        errors.email ? "border-red-500" : ""
                      }`}
                      placeholder="Votre email"
                      type="email"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email?.message}
                    />
                    {errors.email && (
                      <div id="email-error" className="text-red-500">
                        {errors.email.message}
                      </div>
                    )}
                  </div>
                  <div className="mb-6">
                    <label htmlFor="companyName" className="form-label">
                      Nom de l&apos;entreprise
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="companyName"
                      {...register("companyName")}
                      className={`form-input mb-1 ${
                        errors.companyName ? "border-red-500" : ""
                      }`}
                      placeholder="Votre entreprise"
                      type="text"
                      aria-invalid={!!errors.companyName}
                      aria-describedby={errors.companyName?.message}
                    />
                    {errors.companyName && (
                      <div id="companyName-error" className="text-red-500">
                        {errors.companyName.message}
                      </div>
                    )}
                  </div>
                  <div className="mb-6">
                    <label htmlFor="type" className="form-label">
                      Quel type de probleme vous rencontrez ?{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      className="form-input w-full"
                      id="type"
                      {...register("type")}
                    >
                      {typeOfProblems.map((type) => (
                        <option key={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="companyDivision" className="form-label">
                      Dans quel division de l&apos;organisation vous rencontrez
                      le probleme ? <span className="text-red-500">*</span>
                    </label>
                    <select
                      className="form-input w-full"
                      id="companyDivision"
                      {...register("companyDivision")}
                    >
                      {companyDivisions.map((division) => (
                        <option key={division}>{division}</option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="form-label">
                      Votre message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      {...register("message")}
                      className={`form-input ${
                        errors.message ? "border-red-500" : ""
                      }`}
                      placeholder="Votre message"
                      rows={8}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message?.message}
                    />
                    {errors.message && (
                      <div id="message-error" className="text-red-500">
                        {errors.message.message}
                      </div>
                    )}
                  </div>
                  <button
                    type="submit"
                    className={`btn btn-primary ${
                      (isLoading || !isValid) && "opacity-50"
                    }`}
                    disabled={!isValid}
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
