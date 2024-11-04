import {
  Hero,
  Record,
  Navbar,
  Services,
  WhoTrustUs,
  Contact,
  Footer,
} from "@/components";

export function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Record />
      <WhoTrustUs />
      <div className="p-theme flex flex-col gap-theme">
        <Contact />
        <Footer />
      </div>
    </>
  );
}
