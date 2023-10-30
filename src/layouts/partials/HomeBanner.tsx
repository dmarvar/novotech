"use client";

import { useBreakpoint } from "@/hooks/useBreakpoint";
import { markdownify } from "@/lib/utils/textConverter";
import ImageFallback from "@/helpers/ImageFallback";
import { Feature } from "@/types";

const HomeBanner = ({
  feature,
  backgroundSrc,
  showGradient
}: {
  feature: Feature;
  backgroundSrc?: String;
  showGradient: boolean;
}) => {
  const { isAboveMd } = useBreakpoint("md");

  const heading = {
    backgroundImage: `url(${backgroundSrc})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <section className={`section-sm py-0`}>
      <div style={heading}>
        <div className={`py-20 ${showGradient ? "bg-gradient" : "dark:bg-darkmode-palette-blue-800/90"}`}>
          <div className="container">
            <div className="row justify-center">
              <div className="text-center lg:col-9">
                <h1
                  className="mb-4"
                  dangerouslySetInnerHTML={markdownify(feature.title!)}
                />

                <p
                  className={`mb-4 text-lg ${!showGradient && `text-white`}`}
                  dangerouslySetInnerHTML={markdownify(feature.content ?? "")}
                />
                {feature.bulletpoints != null && (
                  <ul>
                    {feature.bulletpoints.map((bullet: string) => (
                      <li className="relative mb-4 pl-6" key={bullet}>
                        <span dangerouslySetInnerHTML={markdownify(bullet)} />
                      </li>
                    ))}
                  </ul>
                )}
                {feature.button!.enable && (
                  <a className="btn btn-primary" href={feature.button!.link}>
                    {feature.button!.label}
                  </a>
                )}
              </div>
              {feature.image != null && (
                <div className="col-12">
                  <ImageFallback
                    src={
                      isAboveMd
                        ? feature.image
                        : feature.phoneImage ?? feature.image
                    }
                    className="mx-auto rounded-xl"
                    width="1200"
                    height="420"
                    alt={feature.title}
                    priority
                  />
                </div>
              )}
            </div>
          </div>
        </div>    </div>
    </section>
  );
};

export default HomeBanner;
