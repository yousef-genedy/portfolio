type PageHeaderProps = {
  title: string;
  description?: string;
};

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header className="space-y-4">
      <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
        {title}
      </h1>
      {description ? <p className="max-w-2xl text-zinc-300">{description}</p> : null}
    </header>
  );
}
