import classnames from 'classnames';
import { ReactNode } from 'react';

interface CardContentItemProps {
    title: string | React.ReactNode;
    description: string | number | undefined | ReactNode;
    type?: 'primary' | 'default';
    children?: React.ReactNode;
}
export const CardContentItem = ({
    title,
    description,
    type = 'default',
    children,
}: CardContentItemProps) => {

    const cssStyle = classnames({
        'text-black-60': type === 'default',
        'text-red-800': type !== 'default'  
    }, 'text-xl');

    console.log( "cssStyled", cssStyle)

    return (
        <div className="flex gap-2 flex-col flex-1">
            <span
                className={` ${
                    type === 'default' ? 'text-black-30' : 'text-white'
                } `}
            >
                {title}
            </span>
            <div className="flex items-baseline text-xs	gap-2">
                <span className={cssStyle}>
                    {description}
                </span>
                <div>{children}</div>
            </div>
        </div>
    );
};
