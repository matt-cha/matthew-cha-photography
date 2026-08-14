import { LINKS } from "@/data/links";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

const JsonLd = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    image: `${SITE_URL}/opengraph-image`,
    email: LINKS.email,
    telephone: "+18184387010",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Orange County",
      addressRegion: "CA",
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Orange County" },
      { "@type": "AdministrativeArea", name: "Los Angeles" },
      { "@type": "AdministrativeArea", name: "Southern California" },
    ],
    sameAs: [LINKS.instagram, LINKS.pixieset],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default JsonLd;
