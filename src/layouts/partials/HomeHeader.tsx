"use client";

import Icon from "@/components/Icon";
import { markdownify } from "@/lib/utils/textConverter";
import { useState, useEffect } from "react";
import config from "@/config/config.json";
import Image from "next/image";

const HomeHeader = ({
}: {
  }) => {
  const { settings } = config;
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const headerHeight = document.querySelector('header')?.offsetHeight || 0;

      const handleResize = () => {
        setHeight(window.innerHeight - headerHeight);
      };

      window.addEventListener('resize', handleResize);

      setHeight(window.innerHeight - headerHeight);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      const nextSection = document.getElementById('home_services');

      if (nextSection) {
        const topOffset = document.querySelector('header')?.offsetHeight || 0;
        let targetTop = nextSection.offsetTop;

        if (settings.sticky_header) {
          targetTop = nextSection.offsetTop - topOffset;
        }

        window.scrollTo({
          top: targetTop,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <section className={`section-sm py-0 relative`}>
      {height > 0 && (
        <div style={{ height: `${height}px` }} className={`flex flex-col justify-center items-center bg-palette-blue-900`}>
          <div className="container z-10">
            <div className="row justify-center">
              <div className="text-center lg:col-9">
                <h1 className="mb-4 text-white" dangerouslySetInnerHTML={markdownify("Libérez le pouvoir du code pour transformer vos processus")} />
                <p className="mb-16 text-lg text-white" dangerouslySetInnerHTML={markdownify("Nous transformons des idées en solutions logicielles sur mesure, débloquant ainsi l'efficacité et la productivité de votre entreprise.")} />
              </div>
            </div>
          </div>

          <Image
            className="absolute w-full h-full z-5"
            layout='fill'
            src="/images/leandev_frog.svg"
            alt={'Lean dev header decoration'}
            priority
          />

          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10">
            <div className="text-white text-center flex flex-col items-center cursor-pointer" onClick={handleScroll}>
              <p className={`text-palette-yellow-900 mb-1`}>Défiler vers le bas</p>
              <Icon className={`text-palette-yellow-900 text-4xl`} icon={"BsChevronCompactDown"} />
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default HomeHeader;
