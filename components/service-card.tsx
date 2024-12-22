export function ServiceCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-background rounded-[10px] p-4 xs:p-6">
      <div className="size-10 shrink-0 bg-white text-primary rounded-full border border-secondary grid place-items-center">
        <Icon className="size-4" />
      </div>
      <h3 className="text-lg font-medium mt-4 mb-2 text-black">{title}</h3>
      <p className="text-foreground text-base">{description}</p>
    </div>
  );
}
