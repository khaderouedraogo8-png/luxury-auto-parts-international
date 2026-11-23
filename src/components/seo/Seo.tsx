import { useEffect } from "react";
import { company } from "../../data/company";
import { absoluteUrl, siteUrl } from "../../lib/site";

type SeoProps = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  const selector = `meta[${attr}="${key}"]`;
  let el = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = content;
}

export function Seo({ title, description, path, image }: SeoProps) {
  useEffect(() => {
    document.title = title;

    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = siteUrl ? absoluteUrl(path) : `${window.location.origin}${path}`;

    upsertMeta("name", "description", description);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:locale", "fr_FR");
    upsertMeta("property", "og:image", absoluteUrl(image ?? company.ogImage));
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
  }, [title, description, path, image]);

  return null;
}
