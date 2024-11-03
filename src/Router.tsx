import { AnimatePresence } from "framer-motion";
import { HomePage } from "./pages";

export function Router() {
  return (
    <>
      <AnimatePresence>
        <HomePage />
      </AnimatePresence>
    </>
  );
}
