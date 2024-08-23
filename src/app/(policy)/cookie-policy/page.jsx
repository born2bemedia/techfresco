import { getPage, getPageSlugs } from "@/utils/blogUtils";
import React from "react";
import "@/styles/policy.scss";

export async function generateStaticParams() {
  const slugs = await getPageSlugs();
  const locales = ["en", "it", "de"];

  const params = [];
  slugs.forEach((slug) => {
    if (!slug.startsWith("IT-") && !slug.startsWith("DE-")) {
      locales.forEach((locale) => {
        params.push({ slug, locale });
      });
    }
  });

  return params;
}

export async function generateMetadata({ params: { locale } }) {
  const page = await getPage("cookie-policy", locale);

  return {
    title: page.title,
    openGraph: {
      title: page.title,
      images: "https://rapidhrconnect.com/images/meta.png",
    },
  };
}

const TermsAndConditions = async () => {
  const page = await getPage("cookie-policy");
  return (
    <>
      <section className="policy-hero">
        <div className="_container">
          <div className="policy-hero__body">
            <h1 dangerouslySetInnerHTML={{ __html: page.title }} />
            {page.date && <div className="date">Last updated: {page.date}</div>}
          </div>
        </div>
      </section>
      <section className="policy-wrap">
        <div className="_container">
          <div className="policy-wrap__body">
            <article dangerouslySetInnerHTML={{ __html: page.body }} />
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsAndConditions;
