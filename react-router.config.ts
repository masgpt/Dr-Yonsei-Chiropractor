import type { Config } from "@react-router/dev/config";

export default {
  ssr: true,
  async prerender() {
    return [
      "/",
      "/about",
      "/message",
      "/services",
      "/reviews",
      "/contact",
      "/accessibility",
      "/techniques/about-chiropractic",
      "/techniques/innate-intelligence",
      "/techniques/upper-cervical",
      "/techniques/car-accident",
      "/techniques/tmj",
      "/techniques/subluxation",
    ];
  },
} satisfies Config;
