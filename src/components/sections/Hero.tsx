import { motion, useScroll, useTransform } from "framer-motion";
import { Corner } from "../Corner";
import { ThemeIcon } from "../ThemeIcon";

export function Hero() {
  const { scrollY } = useScroll();
  const rotate = useTransform(scrollY, [0, window.innerHeight], [0, 400]);

  const scrollDownWindow = () => {
    window.scroll({
      top: window.innerHeight,
      left: 0,
    });
  };

  return (
    <>
      <div className="!pt-[75px] !h-[calc(100vh_-_32px)]">
        <div className="backdrop-blur-sm !h-full bg-black/10 flex items-center justify-center rounded-theme w-full relative !z-[2]">
          <div className="flex flex-col items-center">
            <p className="text-smallest lg:p-body-normal opacity-[0.4]">
              Competitive Edge through Creativity & Technology
            </p>
            <p className="sr-only">Market Insights that make a Difference</p>
            <div aria-hidden className="lg:hidden text-[52px] font-medium">
              <p className="text-primary-muted">Market Insights that</p>
              <p className="text-primary">Make a Difference</p>
            </div>
            <div
              aria-hidden
              className="hero-body lg:inline-flex flex-col items-center hidden "
            >
              <div className="lg:inline-flex gap-4 items-center hidden">
                <p>Market Insights</p>
                <div className="span-element ">
                  <motion.img
                    src="https://cdn.prod.website-files.com/63793925c7db23ce040b0824/64f5c2e6bc77c145a44f4842_Star.svg"
                    loading="lazy"
                    alt="*"
                    style={{ rotate }}
                  />
                </div>
              </div>
              <div className="inline-flex gap-4 items-center w-fit !mx-auto">
                <div className="span-element">
                  <motion.img
                    src="https://cdn.prod.website-files.com/63793925c7db23ce040b0824/64f5c2e6bc77c145a44f4842_Star.svg"
                    loading="lazy"
                    alt="*"
                  />
                </div>
                <p>that</p>
                <motion.p className="text-primary">Make a</motion.p>
              </div>
              <motion.p className="text-primary justify-self-start self-start">
                Difference
              </motion.p>
            </div>
          </div>

          <button
            onClick={scrollDownWindow}
            className="h-[100px] aspect-square absolute bottom-0 right-0 dead-center"
          >
            <Corner
              dir="curly-top-right-dark"
              className="h-full !w-full rotate-90 absolute bottom-0 right-0"
            />
            <ThemeIcon
              icon="arrow-left"
              fontSize={36}
              className="!w-[30px] text-white rotate-90 m-auto mr-[20px] mb-[20px]"
            />
          </button>
          {/*
           */}
        </div>
      </div>

      {/*
      <img
        src="https://cdn.prod.website-files.com/63793925c7db23ce040b0824/64ef089c7513babb5e53bc6c_Meeesh2.jpg"
        loading="eager"
        sizes="(max-width: 479px) 100vw, 97vw"
        srcSet="https://assets-global.website-files.com/63793925c7db23ce040b0824/64ef089c7513babb5e53bc6c_Meeesh2-p-500.jpg 500w, https://assets-global.website-files.com/63793925c7db23ce040b0824/64ef089c7513babb5e53bc6c_Meeesh2-p-800.jpg 800w, https://assets-global.website-files.com/63793925c7db23ce040b0824/64ef089c7513babb5e53bc6c_Meeesh2-p-1080.jpg 1080w, https://assets-global.website-files.com/63793925c7db23ce040b0824/64ef089c7513babb5e53bc6c_Meeesh2.jpg 1604w"
        alt=""
        className="gradient__image .is-home-hero-right"
      />
*/}
      <div className="gradient__image-wrapper overflow-hidden !-z-[1]">
        {/*
        <img
          src="https://cdn.prod.website-files.com/63793925c7db23ce040b0824/64ef089c7513babb5e53bc6c_Meeesh2.jpg"
          loading="eager"
          sizes="(max-width: 479px) 100vw, 97vw"
          srcSet="https://assets-global.website-files.com/63793925c7db23ce040b0824/64ef089c7513babb5e53bc6c_Meeesh2-p-500.jpg 500w, https://assets-global.website-files.com/63793925c7db23ce040b0824/64ef089c7513babb5e53bc6c_Meeesh2-p-800.jpg 800w, https://assets-global.website-files.com/63793925c7db23ce040b0824/64ef089c7513babb5e53bc6c_Meeesh2-p-1080.jpg 1080w, https://assets-global.website-files.com/63793925c7db23ce040b0824/64ef089c7513babb5e53bc6c_Meeesh2.jpg 1604w"
          alt=""
          className="gradient__image is-home-hero-right"
        />
        */}
        <img
          src="https://cdn.prod.website-files.com/63793925c7db23ce040b0824/64ef089c7513babb5e53bc6c_Meeesh2.jpg"
          loading="eager"
          sizes="100vw"
          srcSet="https://assets-global.website-files.com/63793925c7db23ce040b0824/64ef089c7513babb5e53bc6c_Meeesh2-p-500.jpg 500w, https://assets-global.website-files.com/63793925c7db23ce040b0824/64ef089c7513babb5e53bc6c_Meeesh2-p-800.jpg 800w, https://assets-global.website-files.com/63793925c7db23ce040b0824/64ef089c7513babb5e53bc6c_Meeesh2-p-1080.jpg 1080w, https://assets-global.website-files.com/63793925c7db23ce040b0824/64ef089c7513babb5e53bc6c_Meeesh2.jpg 1604w"
          alt=""
          className="gradient__image is-home-hero"
        />
      </div>
    </>
  );
}
