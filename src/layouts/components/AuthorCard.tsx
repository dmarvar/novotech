import Social from "@/components/Social";
import ImageFallback from "@/helpers/ImageFallback";
import { plainifyWithEllipsis } from "@/lib/utils/textConverter";
import Link from "next/link";

const AuthorCard = ({ data }: { data: any }) => {
  const { title, image, social } = data.frontmatter;
  return (
    <div className="rounded bg-theme-light p-8 text-center dark:bg-darkmode-theme-light">
      {image && (
        <ImageFallback
          className="mx-auto mb-6 rounded"
          src={image}
          alt={title}
          width={120}
          height={120}
        />
      )}
      <h4 className="mb-3">{title}</h4>
      <p className="mb-4">{plainifyWithEllipsis(data.content, 200)}</p>
      <Social source={social} className="social-icons" />
    </div>
  );
};

export default AuthorCard;
