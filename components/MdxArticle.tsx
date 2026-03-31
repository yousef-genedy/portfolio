import type { ReactNode } from "react";

type MdxArticleProps = {
  children: ReactNode;
};

export default function MdxArticle({ children }: MdxArticleProps) {
  return <article className="max-w-3xl">{children}</article>;
}
