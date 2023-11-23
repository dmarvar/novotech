import { getListPage } from "@/lib/contentParser";
import CallToAction from "@/partials/CallToAction";
import HomeBanner from "@/partials/HomeBanner";
import OurApproach from "@/partials/OurApproach";
import SeoMeta from "@/partials/SeoMeta";
import WhyChooseUs from "@/partials/WhyChooseUs";
import { Feature } from "@/types";
import WhatWeSolve from "@/partials/WhatWeSolve";
import HomeServices from "@/partials/HomeServices";
import HomeHeader from "@/partials/HomeHeader";
import { useRef } from "react";

const Home = () => {
  const callToAction = getListPage("sections/call-to-action.md");
  const servicesInfo = getListPage("services/_index.md");
  const { services } = servicesInfo.frontmatter;

  return (
    <>
      <SeoMeta />
      {/* Libérez le pouvoir du code pour transformer vos processus */}
      <HomeHeader/>
      {/* Que faisons-nous réellement ? */}
      <HomeServices showGradient={true} services={services} />
      {/* Questions */}
      <WhatWeSolve showGradient={true} />
      {/* Le parcours vers votre solution personnalisée */}
      <OurApproach showGradient={true} />
      {/* Les raisons incontournables de nous choisir */}
      <WhyChooseUs showGradient={true} />
      {/* Parlons de votre Projet ? */}
      <CallToAction data={callToAction} />
    </>
  );
};

export default Home;

