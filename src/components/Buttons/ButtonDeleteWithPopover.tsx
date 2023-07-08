import {
    ButtonHTMLAttributes,
    ReactNode,
    useEffect,
    useRef,
    useState,
} from 'react';

import { CiTrash } from 'react-icons/ci';

interface Props {
    text: string;
    onClick?: () => void;
}

export const DeleteButton = ({ text, onClick }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const popoverRef = useRef<HTMLDivElement>(null);

    const togglePopover = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event: any) => {
        if (popoverRef.current && !popoverRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (
        <>
            <div className="relative w-max" ref={popoverRef}>
                {isOpen && (
                    <div className="absolute min-w-[216px] z-10 bg-white border border-gray-200 rounded-lg  shadow-sm text-sm text-gray-500 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800 bottom-9 left-2 transform -translate-x-1/2">
                        <div className="px-3 py-2">
                            <div className="flex gap-2 items-center font-semibold text-gray-900 dark:text-white">
                                <CiTrash className="text-red-500" />{' '}
                                <span>Deletar</span>
                            </div>
                        </div>
                        <div className="px-3 py-2">
                            <p>{text}</p>
                        </div>
                        <div className="flex justify-end px-3 py-2">
                            <button
                                onClick={togglePopover}
                                type="button"
                                className="bg-gray-200 text-gray-600 hover:bg-gray-300 px-2 py-1 rounded"
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={onClick}
                                type="button"
                                className="bg-red-500 text-white hover:bg-red-600 px-2 py-1 rounded ml-2"
                            >
                                Excluir
                            </button>
                        </div>
                    </div>
                )}
                <button
                    onClick={togglePopover}
                    type="button"
                    className={` ${
                        isOpen
                            ? 'text-white bg-red-500'
                            : 'bg-white text-red-500'
                    }  hover:bg-red-500 hover:text-white border border-red-500 p-2 rounded flex gap-2 items-center justify-center`}
                >
                    <CiTrash />
                </button>
            </div>
        </>
    );
};
