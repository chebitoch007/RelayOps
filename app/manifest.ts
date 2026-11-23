import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "RelayOps",
    short_name: "RelayOps",
    description: "AI automation for agencies and service businesses",
    start_url: "/",
    display: "standalone",
    background_color: "#f3eee4",
    theme_color: "#f3eee4",
    icons: [{ src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }, { src: "/logo-icon.png", sizes: "512x512", type: "image/png", purpose: "any" }],
  };
}
