import { createFileRoute } from "@tanstack/react-router";

import TeamSection from "@/components/ui/TeamSection";

export const Route = createFileRoute("/teams")({
  component: TeamSection,
});
