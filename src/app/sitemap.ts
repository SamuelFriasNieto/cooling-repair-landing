import type { MetadataRoute } from "next";

const baseUrl = "https://www.cooling-repair.com";

const cities = ["valencia", "torrent", "paterna", "burjassot", "gandia", "sagunto"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...cities.map((slug) => ({
      url: `${baseUrl}/zonas/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${baseUrl}/aviso-legal`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/politica-privacidad`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
