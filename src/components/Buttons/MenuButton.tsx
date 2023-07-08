import { MenuButtonProps } from "@utils/types/buttons.type";

export const MenuButton = ({
  outlined,
  className,
  ...props
}: MenuButtonProps) => {
  const MenuButtonClassName = () => {
    let buttonClassName: string = "";
    if (outlined) {
      buttonClassName += "border border-primary dark:border-secondary";
    }
    if (className) {
      buttonClassName += className;
    }
    return buttonClassName;
  };
  return (
    <button
      className={`${MenuButtonClassName()} hover:border-primary hover:dark:border-secondary hover:bg-primary hover:dark:bg-secondary rounded-xl transition-all`}
      {...props}
    ></button>
  );
};
