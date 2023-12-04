import Link from "next/link";
import Image from "next/image";
import { markdownify } from "@/lib/utils/textConverter";

type ServiceCardProps = {
  service: any;
  hideButton: boolean;
  alternativeColor: boolean;
  backgroundSrc?: String;
};

const ServiceCard = ({ service, hideButton, alternativeColor, backgroundSrc }: ServiceCardProps) => {

  const heading = {
    backgroundImage: `url(${backgroundSrc})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div style={heading} className="flex bg-bottom bg-cover rounded-2xl">
      <div className={`flex flex-col justify-between px-5 pb-6 pt-6 rounded-2xl bg-darkmode-palette-blue-800/95 dark:bg-darkmode-palette-blue-800/95 ${alternativeColor && "text-palette-yellow-900 dark:text-palette-yellow-900"}`}>
        <Image
          className="self-center"
          width={65}
          height={65}
          src={service.icon}
          priority
          style={{ width: 65, height: 65 }} alt={"icône"}
        />
        <h3 className="mt-5 self-center" dangerouslySetInnerHTML={markdownify(service.title)} />
        <p className="mt-5 flex-grow text-center self-center" dangerouslySetInnerHTML={markdownify(service.description)} />
        {hideButton == false && (
          <div className="flex justify-center  items-center">
            <Link
              className="mt-5 btn btn-outline-primary btn-sm no-underline"
              href={`/services/${service.slug}`}
            >
              En savoir plus
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
