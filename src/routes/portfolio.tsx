import { createFileRoute } from "@tanstack/react-router";

import PortfolioPage from "@/components/ui/PortfolioPage";

export const Route = createFileRoute("/portfolio")({
  component: PortfolioPage,
});