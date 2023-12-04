"use client";

import ServiceCard from "@/components/ServiceCard";
import ImageFallback from "@/helpers/ImageFallback";

const HomeServices = ({
  services,
  showGradient,
}: {
  services: any;
  showGradient: boolean;
}) => {
  return (
    <section id="home_services" className={`section-sm ${showGradient && "bg-gradient"}`}>
      <div className="container">
        <div className="row">
          <div className={"relative mb:md-0 mb-6 items-center"}>
            <ImageFallback
              className="absolute left-0 top-0 z-index--1"
              src={"/images/pattern_deco_title.svg"}
              height={300}
              width={300}
              alt={"Que faisons-nous réellement decoration"}
            />
            <div className="mt-10 ml-7 relative">
              <h4 className="mb-4 text-palette-yellow-400 dark:text-palette-yellow-400">
                Nos Services
              </h4>
              <h2 className="mb-4">Que faisons-nous réellement ?</h2>
              <p className="mb-8 text-lg ">
                Explorez notre gamme de services spécialisés, conçus pour transformer votre vision en réalité numérique. 
              </p>
            </div>
          </div>
          <div className="col-12">
            <div className="row justify-center flex">
              {services.map((service: any, index: number) => {
                return (
                  <div className="mb-6 md:col-6 lg:col-4 flex" key={index}>
                    <ServiceCard
                      key={service.title}
                      service={service}
                      hideButton={false}
                      alternativeColor={index == 0}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
