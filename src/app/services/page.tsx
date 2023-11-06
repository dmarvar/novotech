import { getListPage } from "@/lib/contentParser";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import React from "react";
import ServiceCard from "./ServiceCard";

type Props = {};

const ServicesPage = (props: Props) => {
  const data = getListPage("services/_index.md");
  const { frontmatter, content } = data;
  const { title, meta_title, description, image, dark_image, services } =
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
        <section className="section-sm">
          <div className="container">
            <div className="row justify-center">
              <div className="md:col-11 lg:col-11">
                <div className="content relative">
                  <div className="flex justify-center md:space-x-10 max-md:flex-wrap md:flex-nowrap">
                    {services.map((service: any) => {
                      return (
                        <ServiceCard key={service.title} service={service} />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ServicesPage;
