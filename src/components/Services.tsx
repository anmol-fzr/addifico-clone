import React, { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TrendBars } from "@/icons";

const cards = [
  {
    title: "Market Trends Analysis",
  },
  {
    title: "Customer Research",
  },
  {
    title: "Market Sizing and Forecasting",
  },
  {
    title: "Competitive Analysis",
  },
  {
    title: "Business Plan & Pitch Deck",
  },
  {
    title: "Financial Modeling and Forecasting",
  },
  {
    title: "Go-to-Market Strategy",
  },
  {
    title: "Business Development Strategy",
  },
];
gsap.registerPlugin(ScrollTrigger);

export function Services() {
  const racesRef = useRef<HTMLUListElement>(null);
  const racesWrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    function getScrollAmount() {
      let racesWidth = racesRef.current?.scrollWidth + 1200;
      return -(racesWidth - window.innerWidth);
    }

    const tween = gsap.to(racesRef.current, {
      x: getScrollAmount,
      duration: 2,
      ease: "none",
    });

    ScrollTrigger.create({
      trigger: racesWrapperRef.current,
      start: "top 20%",
      end: () => `+=${getScrollAmount() * -1}`,
      pin: true,
      animation: tween,
      scrub: 1,
      invalidateOnRefresh: true,
    });
  });

  return (
    <div className="min-h-screen overflow-hidden py-24">
      <div className="lg:max-w-screen-2xl mx-auto " ref={racesWrapperRef}>
        <h1 className="humongus">Services</h1>
        <div className="">
          <ul className="flex gap-4" ref={racesRef}>
            <li className="max-w-[10vw] min-w-[300px] bg-transparent !aspect-square h-full"></li>
            <li className="max-w-[10vw] min-w-[300px] bg-transparent !aspect-square h-full"></li>
            <li className="max-w-[10vw] min-w-[300px] bg-transparent !aspect-square h-full"></li>
            {cards.map(({ title }) => (
              <ServiceCard {...{ title }} key={title} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
type ServiceCardProps = {
  title: string;
};

const ServiceCard = (props: ServiceCardProps) => {
  const { title } = props;
  return (
    <li className="max-w-[10vw] min-w-[300px] bg-secondary !aspect-square p-6 pb-8 rounded-theme h-full">
      <a href="#" className="flex flex-col justify-between h-full">
        <TrendBars className="text-primary" />
        <p className="p-body-normal pr-16">{title}</p>
      </a>
    </li>
  );
};
