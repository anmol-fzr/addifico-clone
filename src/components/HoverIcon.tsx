import { ComponentPropsWithoutRef } from "react";
import { ThemeIcon, ThemeIconProps } from "./ThemeIcon";
import { cn } from "@/utils";

const directions = {
  layer: {
    bottom: "top-full group-hover:top-0",
    top: "bottom-full group-hover:bottom-0",
    left: "right-full group-hover:right-0 ",
    right: "left-full group-hover:left-0 ",
  },
  icon: {
    bottom: "-translate-y-16",
    top: "translate-y-16",
    left: "translate-x-16",
    right: "-translate-x-16",
  },
} as const;

type Direction = keyof (typeof directions)["icon"];

type HoverIconProps = ThemeIconProps & {
  container?: ComponentPropsWithoutRef<"div">;
  dir?: Direction;
  doubleIcon?: boolean;
};

export function HoverIcon(props: HoverIconProps) {
  const { container, doubleIcon, dir = "bottom", ...iconProps } = props;
  const cls = directions.layer[dir];
  const iconDir = directions.icon[dir];

  return (
    <div
      {...container}
      className={cn(
        "float-left h-16 aspect-square flex items-center justify-center bg-accent rounded-full relative overflow-hidden",
        container?.className,
      )}
    >
      <ThemeIcon
        {...iconProps}
        height={30}
        width={30}
        className={`text-primary-muted group-hover:text-accent z-[2] ${doubleIcon && `group-hover:${iconDir}`} transition-theme`}
      />
      <div
        className={cn(
          "absolute bg-primary h-16 w-full rounded-full z-[1] transition-theme flex items-center justify-center",
          cls,
        )}
      >
        {doubleIcon && (
          <ThemeIcon
            {...iconProps}
            height={30}
            width={30}
            className="text-primary-muted group-hover:text-accent z-[2]"
          />
        )}
      </div>
    </div>
  );
}
