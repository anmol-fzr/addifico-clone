import { Logo } from "@/icons";
import { Icon } from "@iconify/react";

export function Navbar() {
  return (
    <div className="py-[1em] px-[2em] flex items-center justify-between h-[80px] fixed inset-0 !z-[10]">
      <div className="w-32 mb-2">
        <Logo />
      </div>
      {/*
      <div>
        <button type="button" className="addifico-btn text-accent">
          <div className="addifico-btn-text is-inside">Get in touch</div>
          <div className="addifico-btn-text is-outside">Don't be shy</div>
          <div className="addifico-btn-circle">
            <Icon
              icon="solar:arrow-right-line-duotone"
              fontSize={40}
              height={40}
              width={40}
              className="addifico-btn-arrow  w-22 !aspect-square !text-primary"
            />
          </div>
        </button>
      </div>
      */}
    </div>
  );
}
