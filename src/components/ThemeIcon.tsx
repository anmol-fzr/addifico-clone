import { Icon, IconProps } from "@iconify/react";

const themeIcons = {
  "arrow-left": "solar:arrow-right-linear",

  // contact cards
  upwork: "bxl:upwork",
  fiverr: "jam:fiverr",
  linkedin: "dashicons:linkedin",
  calendar: "solar:calendar-minimalistic-outline",
} as const;

type ThemeIcon = keyof typeof themeIcons;

export type ThemeIconProps = Omit<IconProps, "icon"> & {
  icon: ThemeIcon;
};

export function ThemeIcon({ icon, ...props }: ThemeIconProps) {
  const iconName = themeIcons[icon];
  console.log({ iconName });
  return <Icon icon={iconName} {...props} />;
}
