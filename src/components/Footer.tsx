import { Fragment } from "react/jsx-runtime";

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
    <footer className="p-theme flex flex-col">
      <div className="bg-black/10 p-theme flex flex-col rounded-theme text-body ">
        <div className="flex w-full py-6 pb-10 justify-between">
          {links.map(({ title, links, className }) => (
            <div className={`flex flex-col lg:flex-row gap-2 ${className}`}>
              <p className="opacity-[0.2] lg:hidden">{title}:</p>
              {links.map((title, index) => (
                <Fragment key={title}>
                  <a
                    href="#"
                    className="text-primary-muted hover:text-primary transition-all duration-300"
                  >
                    {title}
                  </a>
                  {index < links.length - 1 && (
                    <span className="hidden lg:block opacity-[0.2]">/</span>
                  )}
                </Fragment>
              ))}
            </div>
          ))}
        </div>
        <div className="h-[1px] bg-primary opacity-[0.2]" />
        <div className="pt-8 pb-2">
          <p className="text-center opacity-[0.2]">
            © {year} All Rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
