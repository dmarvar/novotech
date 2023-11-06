import Icon from "@/components/Icon";
import Link from "next/link";

type ServiceCardProps = {
  service: any;
};

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <div className="md:col-4 sm:col-10 xs:col-11">
      <div className="mb-5 bg-bottom bg-cover rounded-2xl bg-[url('/images/efficency.jpg')]">
        <div className="px-5 pb-6 pt-2 rounded-2xl dark:bg-darkmode-palette-blue-800/95">
          <Icon className="text-yellow-400 text-8xl" icon={service.icon} />
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <Link
            className="btn btn-outline-primary btn-sm no-underline"
            href={`/services/${service.slug}`}
          >
            Lire plus
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
