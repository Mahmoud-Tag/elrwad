import { createFileRoute } from "@tanstack/react-router";

import AboutUs from "@/components/ui/AboutUs";

export const Route = createFileRoute("/about")({
  component: AboutUs,
});
