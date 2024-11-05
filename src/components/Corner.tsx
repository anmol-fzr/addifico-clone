import { cn } from "@/utils";
import { ComponentPropsWithoutRef } from "react";

const dirs = {
  "top-left":
    "https://cdn.prod.website-files.com/63793925c7db23ce040b0824/64eb539f0f9044a1a9b1bb8a_frame-top-left-outside.svg",
  "top-right":
    "https://cdn.prod.website-files.com/63793925c7db23ce040b0824/64eb532cc6cfc5af6123a385_frame-top-right-outside.svg",
} as const;

type Dir = keyof typeof dirs;

type CornerProps = ComponentPropsWithoutRef<"img"> & {
  dir: Dir;
};

export function Corner({ dir, ...props }: CornerProps) {
  const src = dirs[dir];
  return (
    <img
      src={src}
      {...props}
      className={cn("w-invert aspect-square", props.className)}
    />
  );
}