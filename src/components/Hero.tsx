import { motion, useScroll, useTransform } from "framer-motion";

export function Hero() {
  const { scrollY } = useScroll();

  const rotate = useTransform(scrollY, [0, window.innerHeight], [0, 400]);
  return (
    <>
      <div className="p-theme pt-[80px] !h-screen">
        <div className="backdrop-blur-sm h-full bg-black/10 flex items-center justify-center rounded-theme w-full relative !z-[2]">
          <div className="flex flex-col items-center">
            <p className="p-body-normal opacity-[0.4]">
              Competitive Edge through Creativity & Technology
            </p>
            <p className="sr-only">Market Insights that make a Difference</p>
            <div className="hero-body md:inline-flex flex-col items-center hidden">
              <div className="inline-flex gap-4 items-center">
                <p>Market Insights</p>
                <div className="span-element">
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

          <button className="absolute bottom-0 right-0 p-6 bg-transparent mix-blend-difference">
            BTN
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
        <img
          src="https://cdn.prod.website-files.com/63793925c7db23ce040b0824/64ef089c7513babb5e53bc6c_Meeesh2.jpg"
          loading="eager"
          sizes="(max-width: 479px) 100vw, 97vw"
          srcSet="https://assets-global.website-files.com/63793925c7db23ce040b0824/64ef089c7513babb5e53bc6c_Meeesh2-p-500.jpg 500w, https://assets-global.website-files.com/63793925c7db23ce040b0824/64ef089c7513babb5e53bc6c_Meeesh2-p-800.jpg 800w, https://assets-global.website-files.com/63793925c7db23ce040b0824/64ef089c7513babb5e53bc6c_Meeesh2-p-1080.jpg 1080w, https://assets-global.website-files.com/63793925c7db23ce040b0824/64ef089c7513babb5e53bc6c_Meeesh2.jpg 1604w"
          alt=""
          className="gradient__image is-home-hero-right"
        />
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
