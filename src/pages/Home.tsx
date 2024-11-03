import { Hero, Record, Navbar, Services, WhoTrustUs } from "@/components";

export function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Record />
      <div className="h-screen"></div>
      <WhoTrustUs />
      <div className="h-screen"></div>
    </>
  );
}
