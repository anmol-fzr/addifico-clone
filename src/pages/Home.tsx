import {
  Hero,
  Record,
  Navbar,
  Services,
  WhoTrustUs,
  Contact,
  Related,
  Footer,
  WhyWeExists,
} from "@/components";
import { WhyUs } from "@/components/WhyUs";

export function HomePage() {
  return (
    <>
      <Navbar />
      <div className="p-theme flex flex-col gap-theme">
        <Hero />
        <WhyWeExists />
      </div>
      <Services />
      <div className="p-theme flex flex-col gap-theme">
        <Record />
        <WhyUs />
        <WhoTrustUs />
        <Related />
        <Contact />
        <Footer />
      </div>
      {/*
       */}
    </>
  );
}
