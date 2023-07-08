import { ButtonProps, MenuButonProps } from "@utils/types/buttons.type";

import CategoryIcon from "@assets/icons/Category";
import { MenuButton } from "@components/Buttons/MenuButton";

export const mainButtons: ButtonProps[] = [
  {
    text: "Dashboard",
    Icon: CategoryIcon,
  },
];

export const ListMenuButton = ({ buttons, showText }: MenuButonProps) => {
  return (
    <>
      {buttons?.map((button) => {
        return (
          <MenuButton
            key={button.text?.toString()}
            className={`items-center flex self-center transition-all max-h-16 p-4 w-full group/primary-button gap-2 m-0`}
          >
            <button.Icon />
            <div
              className={`duration-700 grow-0 truncate break-all transition-[width && scale && height] font-normal text-sm ${showText
                ? "flex scale-x-100 w-auto opacity-100"
                : "h-0 w-0 opacity-0"
                }`}
            >
              <p
                className={`text-black-50 text-start font-poppins group-hover/primary-button:text-white ${showText ? "h-full" : "h-0"
                  }`}
              >
                {button.text}
              </p>
            </div>
          </MenuButton>
        );
      })}
    </>
  );
};
