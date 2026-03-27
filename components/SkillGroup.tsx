import type { SkillGroup as SkillGroupType } from "@/data/portfolio";

type SkillGroupProps = {
  group: SkillGroupType;
};

export default function SkillGroup({ group }: SkillGroupProps) {
  return (
	<article className="rounded-xl border border-zinc-200 bg-white p-5">
	  <h3 className="text-base font-semibold text-zinc-900">{group.title}</h3>
	  <ul className="mt-3 flex flex-wrap gap-2">
		{group.skills.map((skill) => (
		  <li
			key={skill}
			className="rounded-md bg-zinc-100 px-2.5 py-1 text-sm text-zinc-700"
		  >
			{skill}
		  </li>
		))}
	  </ul>
	</article>
  );
}

