import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

//const stickyEls = document.querySelectorAll(".sticky-heading");
//
//stickyEls.forEach((el) => {
//  let tl = gsap.timeline({
//    scrollTrigger: {
//      trigger: el,
//      start: "bottom 70%",
//      end: "bottom center",
//      markers: true,
//      toggleActions: "play none reverse none",
//      scrub: 1,
//    },
//  });
//  tl.to(el, { opacity: 0, yPercent: -10 });
//});

export function WhyUs() {
  //const headingRef = useRef<HTMLParagraphElement>(null);

  //useGSAP(() => {
  //  const el = headingRef.current;
  //  let tl = gsap.timeline({
  //    scrollTrigger: {
  //      trigger: el,
  //      start: "bottom 70%",
  //      end: "bottom center",
  //      //start: "bottom 70%",
  //      //end: "bottom center",
  //      markers: true,
  //      toggleActions: "play none reverse none",
  //      scrub: 1,
  //    },
  //  });
  //  tl.to(el, { opacity: 0, yPercent: -10 });
  //});
  //
  return (
    <section className="min-h-screen ">
      <p className="sticky-heading sticky top-[10vh]">Why us?</p>
    </section>
  );
}
