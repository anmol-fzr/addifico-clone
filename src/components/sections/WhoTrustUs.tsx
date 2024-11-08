import { Indeed } from "@/icons/logo";
import { Corner } from "../Corner";

const comps = [
  "Microsoft",
  "indeed",
  "upwork",
  "",
  "fiverr",
  "",
  "ansell",
  "tipalti",
  "estrid",
  "imaginario",
  "",
  "presido",
  "",
  "wedo",
  "",
];

export function WhoTrustUs() {
  return (
    <div className="p-theme min-h-screen w-full relative">
      <section className="bg-primary-muted rounded-theme h-full w-full relative">
        <LoadMore />
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 ~gap-2/4 ~p-2/4">
          <div className="col-span-2 p-4 border border-black/[0.1] rounded-2xl">
            <h4 className="text-accent opacity-[0.6] font-bold">
              Who trusts us?
            </h4>
          </div>
          {comps.map((comp, i) =>
            comp ? (
              <div
                key={`${comp}-${i}`}
                className={`bg-black/[0.1] hover:bg-white/[0.4] text-accent w-full h-full aspect-square max-h-[250px] flex justify-center items-center rounded-xl group transition-theme`}
              >
                <div className="max-w-[125px] group-hover:text-[#003A9B] transition-theme">
                  <Indeed />
                </div>
              </div>
            ) : (
              <div
                key={`${comp}-${i}`}
                className={` text-accent w-full h-full aspect-square max-h-[250px] flex justify-center items-center rounded-xl group transition-theme`}
              ></div>
            ),
          )}
        </div>
      </section>
    </div>
  );
}
function LoadMore() {
  return (
    <button className="absolute bottom-0 right-0 bg-accent rounded-tl-[24px] h-[75px] w-fit px-12 dead-center">
      <Corner
        dir="top-left"
        className="absolute bottom-0 left-0 -translate-x-full rotate-90"
      />

      <h3 className="text-leading opacity-[0.6]">Load More</h3>

      <Corner
        dir="top-left"
        className="absolute top-0 right-0 -translate-y-full rotate-90"
      />
    </button>
  );
}
