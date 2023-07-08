import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useContext,
    useState,
} from 'react';

type SidebarContextType = {
    hovered: boolean;
    setHovered: Dispatch<SetStateAction<boolean>>;
    expandedItems: number[];
    setExpandedItems: Dispatch<SetStateAction<number[]>>;
    selectedItem: number | null;
    setSelectedItem: (selectedItem: number | null) => void;
};

type SidebarProviderProps = {
    children: ReactNode;
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider: React.FC<SidebarProviderProps> = ({
    children,
}) => {
    const [hovered, setHovered] = useState<boolean>(false);
    const [expandedItems, setExpandedItems] = useState<number[]>([]);
    const [selectedItem, setSelectedItem] = useState<number | null>(null);

    return (
        <SidebarContext.Provider
            value={{
                hovered,
                setHovered,
                expandedItems,
                setExpandedItems,
                selectedItem,
                setSelectedItem,
            }}
        >
            {children}
        </SidebarContext.Provider>
    );
};

export const useSidebarContext = () => {
    const context = useContext(SidebarContext);

    if (!context) {
        throw new Error(
            'useSidebarContext must be used within a SidebarProvider',
        );
    }

    return context;
};
