import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;

  const routes = [
    "",
    "/services",
    "/permits-escorts",
    "/fleet",
    "/safety-compliance",
    "/operating-entities",
    "/about-us",
    "/careers",
    "/careers/drivers",
    "/careers/owner-operators",
    "/careers/operations",
    "/get-a-quote",
    "/join-our-fleet",
    "/privacy-policy",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route === "/get-a-quote" ? 0.9 : 0.8,
  }));
}
