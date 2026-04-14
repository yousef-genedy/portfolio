type PageHeaderProps = {
  title: string;
  description?: string;
  descriptionClassName?: string;
};

export default function PageHeader({ title, description, descriptionClassName }: PageHeaderProps) {
  return (
    <header className="space-y-4">
      <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
        {title}
      </h1>
      {description ? <p className={`max-w-2xl text-zinc-300 ${descriptionClassName ?? ""}`}>{description}</p> : null}
    </header>
  );
}
