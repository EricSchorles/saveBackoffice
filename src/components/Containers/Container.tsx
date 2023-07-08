import { ContainerProps } from "@utils/types/container.type";
import { FunctionComponent } from "react";

const Container: FunctionComponent<ContainerProps> = (
  props: ContainerProps
) => {
  const isDark = () => {
    return props.dark ? "bg-primary" : "bg-white";
  };
  return (
    <div
      className={
        props.className ??
        `w-full
        flex
        bg-[#EEF0FA]
        min-h-screen
        dark:bg-gray-600
        ${isDark()}`
      }
    >
      {props.children}
    </div>
  );
};

export default Container;
