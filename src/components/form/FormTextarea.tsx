import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

type FormTextareaProps = ComponentPropsWithoutRef<"textarea">;

function FormTextarea(props: FormTextareaProps) {
  return (
    <textarea {...props} className={twMerge("form-input", props.className)} />
  );
}

export { FormTextarea };
