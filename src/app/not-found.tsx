import SeoMeta from "@/partials/SeoMeta";

const NotFound = async () => {
  return (
    <>
      <SeoMeta title={"Page non trouvée"} />
      <section className="section-sm text-center">
        <div className="container">
          <div className="row justify-center">
            <div className="sm:col-10 md:col-8 lg:col-6">
              <span className="text-[8rem] block font-bold text-dark dark:text-darkmode-dark">
                404
              </span>
              <h1 className="h2 mb-4">Page non trouvée</h1>
              <div className="content">
                <p>La page que vous recherchez a peut-être été supprimée, son nom a été modifié ou elle est temporairement indisponible.</p>
              </div>
              <a href="/" className="btn btn-primary mt-8">
                Retour à l&apos;accueil                
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
