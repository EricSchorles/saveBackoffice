import { FunctionComponent } from "react";
import { StackIconProps } from "@utils/types/icons.types";

const StackIcon: FunctionComponent<StackIconProps> = (
  props: StackIconProps
) => {
  return (
    <svg
      className={`w-6 h-6 ${props.className}`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 17L12 22L22 17"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2 12L12 17L22 12"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 2L2 7L12 12L22 7L12 2Z"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default StackIcon;
