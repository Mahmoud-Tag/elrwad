import { createFileRoute } from "@tanstack/react-router";

import ServicesPage from "@/components/ui/Services";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
});