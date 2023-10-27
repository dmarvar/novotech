"use client";

import { markdownify } from "@/lib/utils/textConverter";
import ImageFallback from "@/helpers/ImageFallback";
import { Feature } from "@/types";
import { FaCheck } from "react-icons/fa/index.js";

const HomeFeature = ({
  feature,
  index,
}: {
  feature: Feature;
  index: number;
}) => {
  return (
    <section
      key={index}
      className={`section-sm ${
        (index % 2 !== 0 || feature.bannerMode) && "bg-gradient"
      }`} // pt-14
    >
      <div className="container">
        <div className="row items-center justify-between">
          <div
            className={`mb:md-0 mb-6 md:col-5 ${
              feature.alternativeLayout && "md:order-2"
            }`}
          >
            <ImageFallback
              className="rounded-xl"
              src={feature.image}
              height={480}
              width={520}
              alt={feature.title}
            />
          </div>

          <div
            className={`md:col-7 lg:col-6 ${
              feature.alternativeLayout && "md:order-1"
            }`}
          >
            <h2
              className="mb-4"
              dangerouslySetInnerHTML={markdownify(feature.title!)}
            />
            {feature.content != null && (
              <p
                className="mb-8 text-lg"
                dangerouslySetInnerHTML={markdownify(feature.content!)}
              />
            )}
            <ul>
              {feature.bulletpoints?.map((bullet: string) => (
                <li className="relative mb-4 pl-6" key={bullet}>
                  <FaCheck
                    className={
                      "absolute left-0 top-1.5 text-palette-yellow-400 dark:text-palette-yellow-400"
                    }
                  />
                  <span dangerouslySetInnerHTML={markdownify(bullet)} />
                </li>
              ))}
            </ul>
            {feature.button.enable && (
              <a className="btn btn-primary mt-5" href={feature.button.link}>
                {feature.button.label}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFeature;
