import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

type FormInputProps = ComponentPropsWithoutRef<"input">;

function FormInput(props: FormInputProps) {
  return (
    <input {...props} className={twMerge("form-input", props.className)} />
  );
}

export { FormInput };
