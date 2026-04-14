import type { ExperienceItem } from "@/lib/content/types";
import ExperienceTimeline from "@/components/experience/ExperienceTimeline";

type ExperienceSectionProps = {
  items: ExperienceItem[];
};

export default function ExperienceSection({ items }: ExperienceSectionProps) {
  return (
	<section aria-label="Experience timeline">
	  <ExperienceTimeline items={items} />
	</section>
  );
}
