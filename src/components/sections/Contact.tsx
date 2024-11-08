import { Icon } from "@iconify/react";
import { FormInput, FormTextarea } from "../form";
import { ThemeIcon } from "../ThemeIcon";
import { HoverIcon } from "../HoverIcon";

const cards = [
  {
    iconName: "upwork",
    title: "UpWork",
    href: "#",
  },
  {
    iconName: "fiverr",
    title: "Fiverr",
    href: "#",
  },
  {
    iconName: "linkedin",
    title: "Linkedin",
    href: "#",
  },
  {
    iconName: "calendar",
    title: "Book a meeting",
    href: "#",
  },
] as const;

const email = "hristo@addifico.com";
const copyEmail = () => window.navigator.clipboard.writeText(email);

export function Contact() {
  return (
    <div className="flex flex-col md:flex-row-reverse gap-theme">
      <div
        className={` rounded-theme gap-2 bg-black/10 w-full ~p-4/6 flex flex-col justify-between`}
      >
        <div className="flex flex-col gap-10 ">
          <p className="text-2xl md:text-4xl text-primary-muted font-medium">
            Interested but don’t know where to start?
          </p>
          <form className="flex flex-col lg:grid grid-cols-2 gap-theme w-full">
            <FormInput placeholder="Name" />
            <FormInput placeholder="Email" />
            <FormInput placeholder="Phone" />
            <FormInput placeholder="Subject" />
            <FormTextarea
              className="col-span-2"
              placeholder="Your message"
              rows={4}
            />
            <button className="bg-primary h-[48px] md:h-[72px] col-span-2 rounded-theme text-[1.25em] text-accent font-semibold">
              Send Message
            </button>
          </form>
        </div>
        <div className="space-y-2">
          <p className="text-small opacity-[0.3]">Or email us at:</p>
          <div className="w-full border h-[4em] border-primary/[0.2] hover:border-primary/[0.4] rounded-2xl flex items-center justify-center relative transition-all">
            <button
              className="absolute top-0 left-0 h-[4em] flex items-center justify-center px-4 md:px-6"
              onClick={copyEmail}
            >
              <Icon
                icon="solar:copy-linear"
                fontSize={30}
                className="text-primary-muted/[0.5]"
              />
            </button>
            <a
              className="text-body text-primary-muted/[0.9] pl-4"
              href={`mailto:${email}`}
            >
              {email}
            </a>
          </div>
        </div>
      </div>
      <ContactCards />
    </div>
  );
}

function ContactCards() {
  return (
    <div className="flex flex-col rounded-theme text-body w-full">
      <div className="grid grid-cols-2 grid-rows-2 w-full justify-between gap-3">
        {cards.map(({ title, href, iconName }) => (
          <div
            key={title}
            className={` rounded-theme gap-2 bg-black/10 w-full aspect-[0.8] lg:aspect-[1.1] ~p-4/7 flex flex-col items-start  justify-between group  `}
          >
            <HoverIcon icon={iconName} />
            <div className="inline-flex items-center overflow-hidden">
              <ThemeIcon
                icon="arrow-left"
                //fontSize="2.5em"
                inline
                className="text-primary-muted/[0.2] ~-translate-x-3/12 group-focus:translate-x-0 group-hover:translate-x-0 transition-theme ~w-[19px]/[2.75em] aspect-square"
              />

              <p className="opacity-[0.7] ~text-[20px]/[2em] ~-translate-x-3/12 group-focus:group-hover:bg-red-200 group-hover:translate-x-0 transition-all duration-500">
                {title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
