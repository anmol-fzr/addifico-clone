import {
  Hero,
  Record,
  Navbar,
  Services,
  WhoTrustUs,
  Contact,
  Related,
  Footer,
} from "@/components";
import { WhyUs } from "@/components/WhyUs";

export function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Record />
      <WhyUs />
      <WhoTrustUs />
      <div className="p-theme flex flex-col gap-theme">
        <Related />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
