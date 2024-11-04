import { Icon } from "@iconify/react";
import { FormInput, FormTextarea } from "./form";

const cards = [
  {
    iconName: "bxl:upwork",
    title: "UpWork",
    href: "#",
  },
  {
    iconName: "jam:fiverr",
    title: "Fiverr",
    href: "#",
  },
  {
    iconName: "dashicons:linkedin",
    title: "Linkedin",
    href: "#",
  },
  {
    iconName: "solar:calendar-minimalistic-outline",
    title: "Book a meeting",
    href: "#",
  },
];

export function Contact() {
  return (
    <div className="flex flex-col md:flex-row-reverse gap-theme">
      <div
        className={` rounded-theme gap-2 bg-black/10 w-full p-6 flex flex-col justify-between`}
      >
        <div className="flex flex-col gap-10 ">
          <h2 className="p-body-heading text-primary-muted font-medium">
            Interested but don’t know where to start?
          </h2>
          <form className="grid grid-cols-2 gap-theme w-full">
            <FormInput placeholder="Name" />
            <FormInput placeholder="Email" />
            <FormInput placeholder="Phone" />
            <FormInput placeholder="Subject" />
            <FormTextarea
              className="col-span-2"
              placeholder="Your message"
              rows={4}
            />
            <button className="bg-primary h-[72px] col-span-2 rounded-theme text-[1.25em] text-accent font-semibold">
              Send Message
            </button>
          </form>
        </div>
        <div className="space-y-2">
          <p className="text-small opacity-[0.3]">Or email us at:</p>
          <div className="w-full border h-[4em] border-primary/[0.2] hover:border-primary/[0.4] rounded-2xl flex items-center justify-center relative transition-all">
            <span className="absolute top-0 left-0 h-[4em] flex items-center justify-center px-6">
              <Icon
                icon="solar:copy-linear"
                fontSize={30}
                className="text-primary-muted/[0.5]"
              />
            </span>
            <a className="text-body text-primary-muted/[0.9]">
              hristo@addifico.com
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
          <a
            href={href}
            key={title}
            className={` rounded-theme gap-2 bg-black/10 w-full aspect-[0.8] lg:aspect-[1.1] p-7 flex flex-col items-start  justify-between group  `}
          >
            <div className="float-left h-16 aspect-square flex items-center justify-center bg-accent rounded-full relative overflow-hidden">
              <Icon
                icon={iconName}
                height={30}
                width={30}
                className="text-primary-muted group-hover:text-accent z-[2]"
              />
              <div className="absolute bg-primary h-16 w-full rounded-full top-full group-hover:top-0 z-[1] transition-theme"></div>
            </div>
            <div className="inline-flex items-center overflow-hidden">
              <Icon
                icon="solar:arrow-right-linear"
                fontSize="2.75em"
                className="text-primary-muted/[0.2] -translate-x-12 group-hover:translate-x-0 transition-theme "
              />
              <h3 className="opacity-[0.7]  -translate-x-12 group-hover:translate-x-0 transition-all duration-500  ">
                {title}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
