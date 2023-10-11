import { getListPage } from "@/lib/contentParser";
import CallToAction from "@/partials/CallToAction";
import HomeBanner from "@/partials/HomeBanner";
import HomeFeature from "@/partials/HomeFeature";
import SeoMeta from "@/partials/SeoMeta";
import Testimonials from "@/partials/Testimonials";
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
      {features.map((feature, index: number) => (        
        feature.bannerMode ? (
          <HomeBanner index={index} feature={feature} />
        ) : (
          <HomeFeature index={index} feature={feature} />
        )
      ))}
      <Testimonials data={testimonial} />
      <CallToAction data={callToAction} />
    </>
  );
};

export default Home;
