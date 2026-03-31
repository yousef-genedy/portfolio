import type { PropsWithChildren } from "react";

export default function Container({ children }: PropsWithChildren) {
  return <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10">{children}</div>;
}
