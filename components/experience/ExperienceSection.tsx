import type { ExperienceItem } from "@/data/experience";
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
