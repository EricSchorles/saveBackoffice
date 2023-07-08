type Props = {
    text: string;
    styleType?: 'primary' | 'secondary';
};

export const Tag = ({ text, styleType }: Props) => {
    let style = '';

    switch (styleType) {
        case 'primary':
            style = 'bg-green-100 text-green-800';
            break;
        case 'secondary':
            style = 'bg-blue-100 text-blue-800';
            break;
        default:
            style = 'bg-gray-100 text-gray';
    }
    return <span className={`py-1 px-2 rounded ${style} `}>{text}</span>;
};
