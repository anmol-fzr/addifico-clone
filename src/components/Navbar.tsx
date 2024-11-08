import { Logo } from "@/icons";
import { Icon } from "@iconify/react";
import { ThemeIcon } from "./ThemeIcon";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export function Navbar() {
  const { scrollYProgress: pathLength } = useScroll();

  return (
    <div className="py-[1em] px-[2em] flex items-center justify-between h-[80px] fixed inset-0 !z-[10]">
      <div className="w-32 mb-2">
        <Logo />
      </div>
      <div className="flex items-center gap-2">
        <button className="h-full backdrop-blur aspect-square bg-primary-muted/10 rounded-full text-2xl relative dead-center group">
          <ThemeIcon
            icon="menu"
            className="absolute text-primary group-hover:-skew-x-[35deg] transition-theme !duration-200"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 60 60"
            height="60"
            width="60"
          >
            <g clip-path="url(#__lottie_element_4)">
              <g
                transform="matrix(1,0,0,1,29.812000274658203,33.8120002746582)"
                opacity="1"
              >
                <g
                  opacity="1"
                  transform="matrix(1,0,0,1,0.18799999356269836,-3.812000036239624)"
                >
                  <motion.path
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    fill-opacity="0"
                    stroke-miterlimit="4"
                    stroke="rgb(111,144,126)"
                    stroke-opacity="1"
                    stroke-width="2"
                    style={{ pathLength }}
                    d=" M0,-29 C16.00510025024414,-29 29,-16.00510025024414 29,0 C29,16.00510025024414 16.00510025024414,29 0,29 C-16.00510025024414,29 -29,16.00510025024414 -29,0 C-29,-16.00510025024414 -16.00510025024414,-29 0,-29z"
                  ></motion.path>
                </g>
              </g>
            </g>
          </svg>
        </button>
        <button type="button" className="addifico-btn text-accent">
          <div className="addifico-btn-text is-inside">Get in touch</div>
          <div className="addifico-btn-text is-outside">Don't be shy</div>
          <div className="addifico-btn-circle">
            <Icon
              icon="solar:arrow-right-line-duotone"
              fontSize={40}
              height={40}
              width={40}
              className="addifico-btn-arrow  w-22 !aspect-square !text-primary"
            />
          </div>
        </button>
      </div>
    </div>
  );
}
