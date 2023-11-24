"use client";

import ImageFallback from "@/helpers/ImageFallback";

const WhyChooseUs = ({ showGradient }: { showGradient: boolean }) => {
  return (
    <section className={`section-sm ${showGradient && "bg-gradient"}`}>
      <div className="container">
        <div className="row justify-between">
          <div className={"relative mb:md-0 mb-6 md:col-5"}>
            <ImageFallback
              className="absolute left-0 top-0 z-index--1"
              src={"/images/pattern_deco_title.svg"}
              height={300}
              width={300}
              alt={"Les raisons incontournables de nous choisir"}
            />
            <div className="mt-10 ml-7 relative">
              <h4 className="mb-4 text-palette-yellow-400 dark:text-palette-yellow-400">
                Pourquoi Lean Dev ?
              </h4>
              <h2 className=" mb-4">
                Les raisons incontournables de nous choisir
              </h2>
              <p className=" mb-8 text-lg ">
                En tant que partenaire, voici pourquoi nous sommes votre choix
                évident :
              </p>
            </div>
          </div>
          <div className={`md:col-7 lg:col-6`}>
            <ul>
              <li className="relative mb-10">
                <div>
                  <h1 className="mb-2 text-palette-yellow-400 dark:text-palette-yellow-400 text-6xl">
                    1.
                  </h1>
                  <h4 className="mb-6 text-palette-yellow-400 dark:text-palette-yellow-400">
                    Expertise Approfondie
                  </h4>
                  <span>
                    Notre équipe est composée d&apos;experts chevronnés dans le
                    domaine du développement logiciel sur mesure. Nous avons une
                    connaissance approfondie des technologies et des meilleures
                    pratiques pour créer des solutions de haute qualité.
                  </span>
                </div>
              </li>

              <li className="relative mb-10">
                <div>
                  <h1 className="mb-2 text-palette-yellow-400 dark:text-palette-yellow-400 text-6xl">
                    2.
                  </h1>
                  <h4 className="mb-6 text-palette-yellow-400 dark:text-palette-yellow-400">
                    Approche Collaborative
                  </h4>
                  <span>
                    Nous croyons en une collaboration étroite avec nos clients.
                    Votre équipe fera partie intégrante du processus de
                    développement, ce qui garantit que les solutions répondent
                    parfaitement à vos besoins.
                  </span>
                </div>
              </li>
              <li className="relative mb-10">
                <div>
                  <h1 className="mb-2 text-palette-yellow-400 dark:text-palette-yellow-400 text-6xl">
                    3.
                  </h1>
                  <h4 className="mb-6 text-palette-yellow-400 dark:text-palette-yellow-400">
                    Innovation et Créativité
                  </h4>
                  <span>
                    Notre équipe est constamment à la recherche de nouvelles
                    idées et de nouvelles approches pour résoudre les défis
                    complexes. Nous apportons une perspective créative à chaque
                    projet.
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
