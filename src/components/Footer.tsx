import { Separator } from "./Seperator";
import { StaggeredFlipUp } from "./animated";

const links = [
  {
    title: "Sitemap",
    links: ["Services", "Resources", "About", "Get in touch"],
    className: "text-left",
  },
  {
    title: "Social",
    links: ["Twitter", "Instagram", "Facebook"],
    className: "text-right",
  },
];

const year = new Date().getFullYear();
export function Footer() {
  return (
    <div className="bg-black/10 max-sm:pt-0  p-theme  flex flex-col rounded-theme text-body ">
      <div className="flex w-full py-6 max-sm:pb-6 pb-10 justify-between">
        {links.map(({ title, links, className }) => (
          <ul
            key={title}
            className={`flex flex-col lg:flex-row gap-4 ${className}`}
          >
            <li className="opacity-[0.2] lg:hidden">{title}:</li>
            {links.map((title) => (
              <StaggeredFlipUp key={title} href="#" title={title} as="a" />
            ))}
          </ul>
        ))}
      </div>
      <Separator />
      <div className="pt-6 pb-2">
        <p className="text-center opacity-[0.2]">
          © {year} All Rights reserved
        </p>
      </div>
    </div>
  );
}
