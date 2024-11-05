import { HoverIcon } from "./HoverIcon";
import { ThemeIcon } from "./ThemeIcon";

export function Related() {
  return (
    <section className="bg-white p-theme rounded-theme space-y-theme">
      <div className="w-full max-w-[100em] md:mx-auto flex flex-col gap-[4em] pt-24 pb-6">
        <div className="flex flex-col md:flex-row  gap-2 justify-between">
          <h2 className="text-secondary-muted w-full">Our latest resources</h2>
          <span className="group">
            <HoverIcon icon="arrow-left" dir="left" doubleIcon />
          </span>
        </div>
        <div className="flex flex-col md:flex-row  gap-8 ">
          <input
            className="py-4 bg-transparent w-full text-accent font-semibold outline-none focus:outline-none border-b hover:border-accent/[0.4] border-accent/[0.2] focus:border-accent transition-theme text-body"
            placeholder="Email"
          />
          <button className="border-b border-accent w-full text-accent font-medium text-body group overflow-hidden">
            <span className="w-full flex items-center -translate-x-7 group-hover:translate-x-0 transition-theme gap-2">
              <ThemeIcon
                icon="arrow-left"
                fontSize="1.5em"
                className="text-primary/75"
              />
              Subscribe
              <ThemeIcon
                icon="arrow-left"
                className="mr-0 ml-auto translate-x-7 text-primary/75"
                fontSize="1.5em"
              />
            </span>
          </button>
        </div>
      </div>
      <section className="bg-primary-muted p-4 pb-8 lg:pt-11 flex rounded-theme">
        <div className="w-full max-w-[100em] md:mx-auto flex flex-col gap-[4em]">
          <div className="flex flex-col md:flex-row  gap-2 justify-between">
            <h2 className="text-secondary-muted w-full">
              Don't want to
              <br />
              miss Anything ?
            </h2>
            <p className="text-body text-accent opacity-[0.5] w-full">
              Sign up for our newsletter to discover
              <br />
              winning trends before your competition!
            </p>
          </div>
          <div className="flex flex-col md:flex-row  gap-8 ">
            <input
              className="py-4 bg-transparent w-full text-accent font-semibold outline-none focus:outline-none border-b hover:border-accent/[0.4] border-accent/[0.2] focus:border-accent transition-theme text-body"
              placeholder="Email"
            />
            <button className="border-b border-accent w-full text-accent font-medium text-body group overflow-hidden">
              <span className="w-full flex items-center -translate-x-7 group-hover:translate-x-0 transition-theme gap-2">
                <ThemeIcon
                  icon="arrow-left"
                  fontSize="1.5em"
                  className="text-primary/75"
                />
                Subscribe
                <ThemeIcon
                  icon="arrow-left"
                  className="mr-0 ml-auto translate-x-7 text-primary/75"
                  fontSize="1.5em"
                />
              </span>
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}
