import { getSinglePage } from "@/lib/contentParser";
import SeoMeta from "@/partials/SeoMeta";
import { Post } from "@/types";
import config from "@/config/config.json";
import React from "react";
import MDXContent from "@/helpers/MDXContent";
import PageHeader from "@/partials/PageHeader";

const { services_folder } = config.settings;

type Props = {};

export const generateStaticParams: () => { single: string }[] = () => {
  const services: Post[] = getSinglePage(services_folder);

  const paths = services.map((service) => ({
    single: service.slug!,
  }));

  return paths;
};

const ServicePage = ({ params }: { params: { single: string } }) => {
  const services: Post[] = getSinglePage(services_folder);
  const service = services.filter((page) => page.slug === params.single)[0];

  const { frontmatter, content } = service;
  const {
    title,
    meta_title,
    description,
    image,
    author,
    categories,
    date,
    tags,
  } = frontmatter;
  // const similarPosts = similerItems(post, posts, post.slug!);
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
            <div className="content mb-10">
              <MDXContent content={content} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ServicePage;
