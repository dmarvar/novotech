"use client";

import Icon from "@/components/Icon";
import { markdownify } from "@/lib/utils/textConverter";
import { useState, useEffect } from "react";
import config from "@/config/config.json";

const HomeHeader = ({
}: {
  }) => {
  const { settings } = config;
  const [height, setHeight] = useState(0);
  const headerHeight = document.querySelector('header')?.offsetHeight || 0;

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight - headerHeight);
    };

    window.addEventListener('resize', handleResize);

    setHeight(window.innerHeight - headerHeight);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [headerHeight]);

  const handleScroll = () => {
    const nextSection = document.getElementById('home_services');

    if (nextSection) {
      const topOffset = document.querySelector('header')?.offsetHeight || 0;
      var targetTop = nextSection.offsetTop;

      if (settings.sticky_header) {
        targetTop = nextSection.offsetTop - topOffset;
      }

      window.scrollTo({
        top: targetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className={`section-sm py-0 relative`}>
      <div style={{ height: `${height}px` }}
        className={`flex justify-center items-center bg-palette-blue-900`}
      >
        <div className="container">
          <div className="row justify-center">
            <div className="text-center lg:col-9">
              <h1
                className="mb-4 text-white"
                dangerouslySetInnerHTML={
                  markdownify(
                    "Libérez le pouvoir du code pour transformer vos processus"
                  )}
              />
              <p
                className={`mb-10 text-lg text-white`}
                dangerouslySetInnerHTML={
                  markdownify(
                    "Nous transformons des idées en solutions logicielles sur mesure, débloquant ainsi l'efficacité et la productivité de votre entreprise."
                  )}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div
          className="text-white text-center flex flex-col items-center cursor-pointer"
          onClick={handleScroll}
        >
          <p className={`text-palette-yellow-900`}>Défiler vers le bas</p>
          <Icon className={`text-palette-yellow-900 text-4xl`} icon={"BsChevronCompactDown"} />
        </div>
      </div>
    </section>
  );
};

export default HomeHeader;
