import { BiEditAlt } from "react-icons/bi";
import { ButtonProps } from "@utils/types/buttons.type";
import { CiTrash } from "react-icons/ci";
import { ReactNode } from "react";

type Props = {
  icon?: React.ReactNode;
  style?: string;
  children: React.ReactNode;
};

export const Button = (props: ButtonProps & Props) => {
  let style = "";
  let icon: ReactNode = null;

  switch (props.typeStyle) {
    case "primary":
      style = "";
      break;
    case "secondary":
      style = "btn-secondary";
      break;
    case "edit":
      style = "bg-blue-500 hover:bg-blue-700 text-white";
      icon = <BiEditAlt />;
      break;
    case "delete":
      style =
        "bg-white text-red-500 hover:bg-red-500 hover:text-white border border-red-500";
      icon = <CiTrash />;
      break;
    default:
      style = "btn-default";
  }
  return (
    <button
      className={`${props.className} ${style}  p-2 rounded flex gap-2 items-center justify-center`}
      onClick={props.onClick}
    >
      {icon ? icon : props.Icon} {props.text}
      {props.children}
    </button>
  );
};
