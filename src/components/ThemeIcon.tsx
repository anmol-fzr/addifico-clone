import { Icon, IconProps } from "@iconify/react";

const themeIcons = {
  "arrow-left": "solar:arrow-right-linear",

  // contact cards
  upwork: "bxl:upwork",
  fiverr: "jam:fiverr",
  linkedin: "dashicons:linkedin",
  calendar: "solar:calendar-minimalistic-outline",
  menu: "solar:hamburger-menu-linear",
} as const;

type ThemeIcon = keyof typeof themeIcons;

export type ThemeIconProps = Omit<IconProps, "icon"> & {
  icon: ThemeIcon;
};

export function ThemeIcon({ icon, ...props }: ThemeIconProps) {
  const iconName = themeIcons[icon];
  return <Icon icon={iconName} {...props} />;
}
