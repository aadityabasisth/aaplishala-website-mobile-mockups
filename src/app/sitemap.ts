import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || siteConfig.url;

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
  ];
}
