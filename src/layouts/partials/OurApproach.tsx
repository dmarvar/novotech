"use client";

import ImageFallback from "@/helpers/ImageFallback";
import { useBreakpoint } from "@/hooks/useBreakpoint";

const OurApproach = ({
  showGradient,
}: {
  showGradient: boolean;
}) => {

  const { isAboveMd } = useBreakpoint("md");

  return (
    <section className={`section-sm ${showGradient && "bg-gradient"}`}>
      <div className="container">
        <div className="row items-center justify-between">
          <div className={`relative mb:md-0 mb-6 md:col-5`}>
            <ImageFallback
              className="absolute left-0 top-0 z-index--1"
              src={"/images/pattern_deco_title.svg"}
              height={300}
              width={300}
              alt={"Les raisons incontournables de nous choisir"}
            />
            <div className="mt-10 ml-7 relative">
              <h4 className="mb-4 text-palette-yellow-400 dark:text-palette-yellow-400">
                Notre <b>Approche</b>
              </h4>
              <h2 className=" mb-4">
                Le parcours vers votre solution personnalisée
              </h2>
            </div>
          </div>
          <div className={`md:col-12 lg:col-7`}>
            <p className="mt-5 text-lg">
              Le parcours proposé est basé sur la méthodologie du  <span className="text-palette-yellow-400 dark:text-palette-yellow-400">Kaizen Event</span> et le <span className="text-palette-yellow-400 dark:text-palette-yellow-400">DMAIC</span>, nos clients sont donc impliqués dans toutes les étapes d&apos;amélioration. Notre valeur ajoutée consiste à vous offrir des conseils pour accroître votre efficacité opérationnelle, ainsi que le développement de solutions logicielles adaptées, et des actions concrètes d&apos;amélioration.
            </p>
          </div>
          <div className="mt-16 col-12 text-center">
            <ImageFallback
              src={
                isAboveMd
                  ? "/posts/post_2/kaizen.png"
                  : "/images/phone_kaizen.png"
              }
              className="mx-auto rounded-xl"
              width="1200"
              height="420"
              alt={"Le parcours vers votre solution personnalisée"}
              priority
            />

            <a className="btn btn-primary mt-5" href={"/posts/post-2"}>
              En savoir plus
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurApproach;
