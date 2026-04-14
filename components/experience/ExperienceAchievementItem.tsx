import type { ExperienceAchievement } from "@/lib/content/types";
import { getAchievementIcon } from "@/components/experience/iconMap";

type ExperienceAchievementItemProps = {
  achievement: ExperienceAchievement;
};

function renderBoldSegments(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      const content = part.slice(2, -2);
      return (
        <strong key={`${content}-${index}`} className="font-extrabold text-sky-100">
          {content}
        </strong>
      );
    }

    return <span key={`${part}-${index}`}>{part}</span>;
  });
}

export default function ExperienceAchievementItem({ achievement }: ExperienceAchievementItemProps) {
  return (
    <li className="flex gap-3">
      <span className="mt-1 inline-flex shrink-0 text-zinc-400" aria-hidden="true">
        {getAchievementIcon(achievement.type)}
      </span>
      <p className="min-w-0 wrap-break-word text-sm leading-6 text-zinc-200">
        {renderBoldSegments(achievement.text)}
      </p>
    </li>
  );
}
