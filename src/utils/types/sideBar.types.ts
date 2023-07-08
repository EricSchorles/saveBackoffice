import { ButtonProps } from './buttons.type';

export interface SideBarProps {
    setMenuButtons: (menuButtons: ButtonProps[]) => void;
    buttons: ButtonProps[];
}
