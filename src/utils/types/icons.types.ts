import { SVGProps } from 'react';

export interface MenuLogoIcon {
    active: boolean;
}
export type direction = 'left' | 'right' | 'down' | 'up';
export interface CaretIconProps {
    direction: direction;
}
export interface StackIconProps extends SVGProps<SVGSVGElement> {}
