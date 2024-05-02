const references = [
  {
    title: "Customizing Colors - Tailwind CSS",
    href: "https://tailwindcss.com/docs/customizing-colors",
  },
  {
    title: "EightShapes Contrast Grid",
    href: "https://contrast-grid.eightshapes.com",
  },
  {
    title: "Web Content Accessibility Guidelines (WCAG) 2.2",
    href: "https://www.w3.org/TR/WCAG22/",
  },
] as const satisfies { title: string; href: string }[];

export default function ReferencePage() {
  return (
    <div className="mx-auto grid w-[min(100%,40rem)] gap-y-8">
      <div className=" grid gap-y-4 ">
        <h1 className=" text-lg font-bold">参考サイト</h1>
        <ul className=" grid list-disc gap-y-2 pl-4">
          {references.map((reference) => (
            <li key={reference.href}>
              <ReferenceLink href={reference.href}>
                {reference.title}
              </ReferenceLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ReferenceLink({
  href,
  children,
}: Readonly<{
  href: string;
  children: React.ReactNode;
}>) {
  return (
    <a href={href} className=" underline underline-offset-2">
      {children}
    </a>
  );
}