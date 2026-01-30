import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("pages/Home.tsx"),
  route("about", "pages/About.tsx"),
  route("message", "pages/MessageFromDrPark.tsx"),
  route("services", "pages/Services.tsx"),
  route("reviews", "pages/Reviews.tsx"),
  route("contact", "pages/Contact.tsx"),
  route("accessibility", "pages/Accessibility.tsx"),
  
  // Techniques Routes
  route("techniques/about-chiropractic", "pages/techniques/AboutChiropractic.tsx"),
  route("techniques/innate-intelligence", "pages/techniques/InnateIntelligence.tsx"),
  route("techniques/upper-cervical", "pages/techniques/UpperCervical.tsx"),
  route("techniques/car-accident", "pages/techniques/CarAccident.tsx"),
  route("techniques/tmj", "pages/techniques/TMJ.tsx"),
  route("techniques/subluxation", "pages/techniques/Subluxation.tsx"),
] satisfies RouteConfig;
