"use client";

import Icon from "@/components/Icon";
import { markdownify } from "@/lib/utils/textConverter";
import { Testimonial } from "@/types";
import Link from "next/link";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface PageData {
  notFound?: boolean;
  content?: string;
  frontmatter: {
    enable?: boolean;
    title: string;
    description?: string;
    testimonials: Array<Testimonial>;
  };
}

const Testimonials = ({ data }: { data: PageData }) => {
  return (
    <>
      {data.frontmatter.enable && (
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="mx-auto mb-12 text-center md:col-10 lg:col-8 xl:col-6">
                <h2
                  dangerouslySetInnerHTML={markdownify(data.frontmatter.title)}
                  className="mb-4"
                />
                <p
                  dangerouslySetInnerHTML={markdownify(
                    data.frontmatter.description!,
                  )}
                />
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
                    },
                    992: {
                      slidesPerView: 3,
                    },
                  }}
                >
                  {data.frontmatter.testimonials.map(
                    (item: Testimonial, index: number) => (
                      <SwiperSlide key={index}>
                        <div className="rounded-lg bg-theme-light px-7 pb-5 pt-3 dark:bg-darkmode-theme-light">
                          <blockquote
                            className="mt-5 text-lg"
                            dangerouslySetInnerHTML={markdownify(item.content)}
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
      )}
    </>
  );
};

export default Testimonials;
