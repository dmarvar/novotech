"use client";

import Icon from "@/components/Icon";
import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";
import { Testimonial } from "@/types";
import Link from "next/link";
import "swiper/css";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const WhatWeSolve = ({ showGradient }: { showGradient: boolean; }) => {

  const questions = [
    "Dans votre quotidien, vous êtes face à des tâches répétitives qui pourraient être automatisées pour gagner du temps et de l'efficacité",
    "Certains de vos processus sont-ils gérés manuellement, sur papier ou via des feuilles de calcul",
    "Vous avez identifié des goulots d'étranglement dans vos processus qui ralentissent la productivité",
    "Vous constatez des erreurs ou retards fréquents dans vos processus qui impactent votre opération ",
    "Vous avez relevé des coûts directs ou indirects associés à des processus inefficaces",
    "Vous avez déjà envisagé des solutions technologiques pour améliorer vos processus mais vous ne savez pas vers quelle solution et partenaire vous tourner",
    "Vous observez une démotivation des équipes à mener des actions chronophages et de peu de valeur ajoutée",
    "Vous souhaitez mettre en place des KPIs spécifiques ou pouvoir collecter de la data mais vous ne disposez pas de moyens automatiques de le faire",
    "Des problèmes de communication entre différentes équipes ou départements ont un impact sur vos opérations"
  ];

  return (
    <section className={`section-sm ${showGradient && "bg-gradient"}`}>
      <div className="container">
        <div className="row">
          <div className={"relative mb:md-0 mb-6 items-center"}>
            <ImageFallback
              className="absolute left-0 top-0 right-0 mx-auto z-index--1"
              src={"/images/pattern_deco_center_title.svg"}
              height={400}
              width={600}
              alt={"Les raisons incontournables de nous choisir"}
            />
            <div className="mt-10 relative text-center">
              <h4 className="mb-4 text-palette-yellow-400 dark:text-palette-yellow-400">
                Que résolvons-nous ?
              </h4>
              <h2 className="mb-4">
                Problèmes que Lean Dev peut résoudre
              </h2>
              <p className="mb-8 text-lg">
                Voici quelques questions qui pourraient vous aider à identifier si vous n&apos;exploitez pas encore pleinement votre potentiel
              </p>
            </div>
          </div>
          <div className="col-12">
            <Swiper
              modules={[Autoplay, Pagination]}
              pagination={{ clickable: true }}
              loop={true}
              loopedSlides={2}
              centeredSlides={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              spaceBetween={24}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  autoHeight: true
                },
                992: {
                  slidesPerView: 3,
                },
              }}
            >
              {questions.map(
                (item: string, index: number) => (
                  <SwiperSlide key={index}>
                    <div className="rounded-lg bg-theme-light px-7 pb-5 pt-3 dark:bg-darkmode-theme-light">
                      <blockquote
                        className="mt-5 text-lg"
                        dangerouslySetInnerHTML={markdownify(item)}
                      />
                      <div className="flex justify-end">
                        <Icon
                          icon="FaQuestion"
                          className="text-3xl mt-3 text-yellow-400"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ),
              )}
            </Swiper>
          </div>
          <div className="mt-10">
            <div className="mb-10 mx-5 text-center">
              Si l&rsquo;un des scénarios présentés vous semble familier,
              Lean Dev offre une solution adaptée qui vous permettra
              d&rsquo;exploiter pleinement le potentiel de votre
              organisation. Il est important de noter qu&rsquo;il existe de
              nombreuses autres situations et contextes dans lesquels notre
              intervention peut également être bénéfique.
            </div>
            <div className="mx-auto text-center">
              <Link href="/services" className="btn btn-primary mt-5">
                Découvrez nos services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeSolve;
