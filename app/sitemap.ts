import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://newera.0x1d.xyz";
  const currentDate = new Date().toISOString();

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          vi: `${baseUrl}?lang=vi`,
          en: `${baseUrl}?lang=en`,
        },
      },
    },
    {
      url: `${baseUrl}?lang=vi`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}?lang=en`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
