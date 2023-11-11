import { z } from "zod";

export const schema = z.object({
  name: z
    .string()
    .nonempty("Le champ est necessaire")
    .min(2, "Saisissez une valeur comprise entre 2 et 50 caractères")
    .max(50, "Saisissez une valeur comprise entre 2 et 50 caractères"),
  email: z
    .string()
    .nonempty("Le champ est necessaire")
    .email("Le format de l'e-mail n'est pas respecté"),
  message: z
    .string()
    .nonempty("Le champ est necessaire")
    .min(10, "Saisissez une valeur comprise entre 10 et 500 caractères")
    .max(500, "Saisissez une valeur comprise entre 10 et 500 caractères"),
  companyName: z
    .string()
    .nonempty("Le champ est necessaire")
    .min(1)
    .max(50, "Saisissez une valeur comprise entre 1 et 50 caractères"),
  companyDivision: z
    .string()
    .nonempty("Le champ est necessaire")
    .min(1)
    .max(50, "Saisissez une valeur comprise entre 1 et 50 caractères"),
  type: z
    .string()
    .nonempty("Le champ est necessaire")
    .min(1)
    .max(150, "Saisissez une valeur comprise entre 1 et 150"),
});

export type TContactForm = z.infer<typeof schema>;
