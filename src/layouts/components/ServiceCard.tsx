import Icon from "@/components/Icon";
import Link from "next/link";

type ServiceCardProps = {
  service: any;
  hideButton: boolean;
  backgroundSrc: String;
};

const ServiceCard = ({ service, hideButton, backgroundSrc }: ServiceCardProps) => {

  const heading = {
    backgroundImage: `url(${backgroundSrc})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div style={heading} className="flex bg-bottom bg-cover rounded-2xl">
      <div className="flex flex-col justify-between px-5 pb-6 pt-2 rounded-2xl dark:bg-darkmode-palette-blue-800/95">
        <Icon className={`text-yellow-400 text-8xl ${hideButton && "self-center"}`} icon={service.icon} />
        <h3 className="mt-5">{service.title}</h3>
        <p className="mt-5 flex-grow">{service.description}</p>
        {hideButton == false && (
          <div>
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
