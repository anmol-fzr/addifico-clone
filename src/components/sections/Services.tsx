import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  TrendBars,
  UserSearch,
  MarketSizing,
  CompetitiveAnalysis,
  BusinessPlan,
  FinancialModel,
  GoToMarket,
  BusinessDev,
} from "@/icons";
import { Corner } from "../Corner";
import { ThemeIcon } from "../ThemeIcon";

const cards = [
  {
    title: "Market Trends Analysis",
    icon: TrendBars,
    desc: "Discover winning trends before everyone else and see how you can take advantage.",
  },
  {
    title: "Customer Research",
    icon: UserSearch,
    desc: "See how your customers live, think, and act and learn how to position your offering accordingly.",
  },
  {
    title: "Market Sizing and Forecasting",
    icon: MarketSizing,
    desc: "Quantify the market potential of your products and services before you invest. Ever heard of TAM, SAM, and SOM?",
  },
  {
    title: "Competitive Analysis",
    icon: CompetitiveAnalysis,
    desc: "Learn who you’re up against, what makes them tick, and how to remain one step ahead.",
  },
  {
    title: "Business Plan & Pitch Deck",
    icon: BusinessPlan,
    desc: "Planning your new venture? We’ll help you tell your story in a way that gets people excited to join and invest.",
  },
  {
    title: "Financial Modeling and Forecasting",
    icon: FinancialModel,
    desc: "Cashflow is king. We can help you model your revenue and expenses month by month so you know what to expect.",
  },
  {
    title: "Go-to-Market Strategy",
    icon: GoToMarket,
    desc: "We’ll craft a highly specific and actionable step-by-step plan for your launch and expansion. All based on data. No gut feeling. ",
  },
  {
    title: "Business Development Strategy",
    icon: BusinessDev,
    desc: "We know your products and services rock. Now let's push them to market the right way!",
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
        <div>
          <ul className="gap-4 hidden md:flex" ref={racesRef}>
            <li className="max-w-[10vw] min-w-[300px] bg-transparent !aspect-square h-full"></li>
            <li className="max-w-[10vw] min-w-[300px] bg-transparent !aspect-square h-full"></li>
            <li className="max-w-[10vw] min-w-[300px] bg-transparent !aspect-square h-full"></li>
            {cards.map((service) => (
              <ServiceCard {...service} key={service.title} />
            ))}
          </ul>
          <ul className="md:hidden flex flex-col gap-4">
            {cards.map((service) => (
              <ServiceCard {...service} key={service.title} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
type ServiceCardProps = {
  title: string;
  desc: string;
  icon: any;
};

const ServiceCard = (props: ServiceCardProps) => {
  const { title, desc, icon: Icon } = props;
  return (
    <li className="max-w-[360px] min-w-[300px] bg-secondary lg:aspect-square rounded-theme h-full relative group transition-theme overflow-hidden">
      <div className="p-6 pb-8 h-full !z-[10]">
        <a href="#" className="flex flex-col justify-between h-full">
          {/*
          <TrendBars className="text-primary !z-[11] group-hover:text-accent" />
          */}
          <Icon className="text-primary !z-[11] group-hover:text-accent" />

          <Corner
            dir="curly-top-right-dark"
            className="!h-[80px] !w-[80px] aspect-square absolute -top-[5em] -right-[5em] group-hover:top-[-1px] group-hover:right-[-1px] transition-theme !z-[11] !duration-500"
          />
          <span className="p-6 group-hover:p-4 flex items-center justify-center absolute top-0 right-0 transition-theme !z-[11]">
            <ThemeIcon
              icon="arrow-left"
              className="-rotate-45 text-primary-muted opacity-[0.16] group-hover:opacity-[0.5] transition-theme"
              fontSize={30}
            />
          </span>
          <div className="!z-[12] grid grid-cols-1 gap-2">
            <p className="p-body-normal pr-16 !z-[12] group-hover:text-accent/[0.8] text-primary-muted/[0.8] font-medium duration-500">
              {title}
            </p>
            <div className="service_single-small-wrapper opacity-0 group-hover:opacity-100 group-hover:max-h-[6em]">
              <p className="text-small text-accent opacity-4">{desc}</p>
            </div>
          </div>
        </a>
      </div>
      <div className="!w-full bg-primary absolute top-0 left-0 !z-[0] rounded-theme  h-full w-full translate-y-[110%] group-hover:translate-y-0 transition-theme !duration-500" />
    </li>
  );
};
