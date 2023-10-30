import { getListPage } from "@/lib/contentParser";
import CallToAction from "@/partials/CallToAction";
import HomeBanner from "@/partials/HomeBanner";
import HomeFeature from "@/partials/HomeFeature";
import SeoMeta from "@/partials/SeoMeta";
import Testimonials from "@/partials/Testimonials";
import WhyChooseUs from "@/partials/WhyChooseUs";
import { Feature } from "@/types";

const Home = () => {
  const homepage = getListPage("homepage/_index.md");
  const testimonial = getListPage("sections/testimonial.md");
  const callToAction = getListPage("sections/call-to-action.md");
  const { frontmatter } = homepage;
  const {
    features,
  }: {
    features: Feature[];
  } = frontmatter;

  return (
    <>
      <SeoMeta />
      {/* Libérez le pouvoir du code pour transformer vos processus */}
      <HomeBanner
        showGradient={false}
        feature={features[0]}
        backgroundSrc={"/images/efficency.jpg"}
      />
      {/* Que faisons-nous réellement ? */}
      <HomeFeature
        feature={features[1]}
        showGradient={true}
        alternativeLayout={true} />
      {/* Questions */}
      <Testimonials showGradient={true} data={testimonial} />
      {/* Le parcours vers votre solution personnalisée */}
      <HomeBanner
        showGradient={true}
        feature={features[2]}
      />
      {/*  Les raisons incontournables de nous choisir */}      
      <WhyChooseUs showGradient={true} />
      {/* Parlons de votre Projet ? */}
      <CallToAction data={callToAction} />
    </>
  );
};

export default Home;

