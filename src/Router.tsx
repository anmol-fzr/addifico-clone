import { AnimatePresence } from "framer-motion";
import { HomePage } from "./pages";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//lenis.on("scroll", ScrollTrigger.update);
//gsap.ticker.add((time) => {
//  lenis.raf(time * 1000);
//});
//gsap.ticker.lagSmoothing(0);

const lenis = new Lenis();
function raf(time: number) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

export function Router() {
  return (
    <>
      <AnimatePresence>
        <HomePage />
      </AnimatePresence>
    </>
  );
}
