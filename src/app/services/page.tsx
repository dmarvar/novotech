import { getListPage } from "@/lib/contentParser";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import React from "react";
import ServiceCard from "@/components/ServiceCard";

const ServicesPage = () => {
  const data = getListPage("services/_index.md");
  const { frontmatter, content } = data;
  const { title, meta_title, description, image, services } =
    frontmatter;

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <main>
        <PageHeader title={title} />
        <section className="section-sm pb-0">
          <div className="container">
         
            <div className="row justify-center flex">
              <p className="flex justify-center text-center mb-14 text-lg ">
                Explorez notre gamme de services spécialisés, conçus pour transformer votre vision en réalité numérique. 
              </p>
              {services.map((service: any, index: number) => {
                return (
                  <div className="mb-14 md:col-6 lg:col-4 flex" key={index}>
                    <ServiceCard
                      key={service.title}
                      service={service}
                      hideButton={false}
                      alternativeColor={index == 0}
                    />
                  </div>
                );
              })}
              <p className="flex justify-center text-center mb-14 text-lg ">
                Chacun de ces services vise à offrir une approche sur mesure, alliant expertise technique et stratégique pour garantir des solutions logicielles innovantes et une optimisation opérationnelle, permettant ainsi à votre entreprise d&apos;atteindre ses objectifs avec agilité et efficacité.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ServicesPage;
