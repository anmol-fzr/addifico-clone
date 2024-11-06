import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

type FormInputProps = ComponentPropsWithoutRef<"input">;

function FormInput(props: FormInputProps) {
  return (
    <input
      {...props}
      className={twMerge("form-input ~h-[25px]/[65px]  ", props.className)}
    />
  );
}

export { FormInput };
