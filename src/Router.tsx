import { AnimatePresence } from "framer-motion";
import { HomePage } from "./pages";
import Lenis from "lenis";

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
