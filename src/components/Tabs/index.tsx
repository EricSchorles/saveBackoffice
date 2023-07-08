import 'tailwindcss/tailwind.css';

import * as Tabs from '@radix-ui/react-tabs';

import { ReactNode, useState } from 'react';

type TabItem = {
    id: string;
    title: string;
    content: ReactNode;
};

type TabsComponentProps = {
    tabs: TabItem[];
};

export const TabsComponent: React.FC<TabsComponentProps> = ({ tabs }) => {
    const [openTab, setOpenTab] = useState(0);

    return (
        <Tabs.Root
            defaultValue="0"
            orientation="vertical"
            className="bg-white rounded-lg p-4"
        >
            <Tabs.List aria-label="tabs example" className="flex">
                {tabs.map((tab, index) => (
                    <Tabs.Trigger
                        value={index.toString()}
                        key={tab.id}
                        className={`px-3 py-2 flex items-center text-sm font-medium focus:outline-none ${
                            openTab === index
                                ? 'text-primary border-solid border-b-2 border-primary'
                                : 'text-black-60 border-solid border-b-2 border-black-60 '
                        }`}
                        onClick={() => setOpenTab(index)}
                    >
                        {tab.title}
                    </Tabs.Trigger>
                ))}
            </Tabs.List>
            {tabs.map((tab, index) => (
                <Tabs.Content key={tab.id} value={tab.id}>
                    {openTab === index && (
                        <div className="p-4">{tab.content}</div>
                    )}
                </Tabs.Content>
            ))}
        </Tabs.Root>
    );
};
