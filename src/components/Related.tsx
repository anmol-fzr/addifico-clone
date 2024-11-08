import { Corner } from "./Corner";
import { HoverIcon } from "./HoverIcon";
import { CornerCutOut } from "./Services";
import { ThemeIcon } from "./ThemeIcon";

const date = "10/23/2003";

const blogs = [
  {
    image:
      "https://cdn.prod.website-files.com/64e8bbf4a8e46c39e0352f6e/653fbff5cabfba49d46f0767_Rectangle%20486.jpg",
    title: "Startup Market Sizing: Founder's Guide to TAM SAM SOM",
    date: "10/23/2023",
  },
  {
    image:
      "https://cdn.prod.website-files.com/64e8bbf4a8e46c39e0352f6e/653fc0054241bde3df05b337_Rectangle%20485.jpg",
    title: "Startup Market Sizing: Founder's Guide to TAM SAM SOM",
    date: "10/02/2023",
  },
  {
    image:
      "https://cdn.prod.website-files.com/64e8bbf4a8e46c39e0352f6e/653fc0136a4e51a055b9f34c_Rectangle%20487.jpg",
    title: "Startup Market Sizing: Founder's Guide to TAM SAM SOM",
    date: "09/27/2023",
  },
];

export function Related() {
  return (
    <section className="bg-white p-theme rounded-theme space-y-theme">
      <div className="w-full max-w-[100em] md:mx-auto flex flex-col gap-[2em] pt-24 pb-6">
        <div className="flex gap-2 justify-between">
          <h2 className="text-secondary-muted w-full">Our latest resources</h2>
          <span className="group">
            <HoverIcon icon="arrow-left" dir="left" doubleIcon />
          </span>
        </div>
        <div className="grid grid-auto-fit gap-8">
          {blogs.map(({ image, title, date }) => (
            <div
              key={title}
              className="w-full flex flex-col gap-3 relative group transition-theme !z-[10] overflow-hidden "
            >
              <Corner
                dir="curly-top-right"
                className="rounded-bl-2xl h-[5em] w-[5em] aspect-square absolute -top-[5em] -right-[5em] group-hover:top-0 group-hover:right-0 transition-theme !z-[11] !duration-500"
              />

              <img src={image} className="rounded-theme" />
              <div className="flex items-center justify-between">
                <span className="text-body-small text-secondary-muted opacity-4 font-medium">
                  Blog
                </span>

                <span className="text-body-small text-secondary-muted opacity-4 font-medium">
                  {new Intl.DateTimeFormat("en-GB", {
                    dateStyle: "full",
                  }).format(new Date(date))}
                </span>
              </div>
              <p className="text-accent ~text-lg/3xl font-medium text-secondary-muted">
                {title}
              </p>
              <div className="mt-2">
                <span className="bg-primary-muted/50 text-accent text-[.9em] py-[.5em] px-[1.2em] rounded-full">
                  Market Sizing and Forecasting
                </span>
              </div>
            </div>
          ))}
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
