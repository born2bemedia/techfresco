import React from "react";
import PostCard from "./PostCard";
import { getPost, getPosts, getSlugs } from "@/utils/blogUtils";
import PostsWrap from "./PostsWrap";

export async function generateStaticParams() {
  const slugs = await getSlugs();
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

const InsightsLoop = async () => {
  const posts = await getPosts();

  return (
    <section className="insights-loop">
      <div className="_container">
        <PostsWrap posts={posts} />
      </div>
    </section>
  );
};

export default InsightsLoop;
