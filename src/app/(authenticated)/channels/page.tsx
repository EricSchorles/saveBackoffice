'use client';

import { GiAirForce } from 'react-icons/gi';
import useChannel from '@hooks/useChannel';

export default function ChannelOptionsPage() {

    const { channels, handleSelectChannel } = useChannel();

    const handleSelectChange = (value: string) => {
        handleSelectChannel(value);
    };

    return (
        <div className="flex gap-2 flex-wrap">
            {channels?.items?.map((channel) => (
                <div
                    key={channel.id}
                    className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                >
                    <div className="flex flex-col items-center pb-10">
                        <GiAirForce
                            style={{
                                fontSize: 104,
                                color:
                                    channel.code === '__default_channel__'
                                        ? '#1890ff'
                                        : '#ada9a9',
                            }}
                        />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                            {channel.code === '__default_channel__'
                                ? 'Canal padrão'
                                : channel.code}
                        </h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                            descrição
                        </span>
                        <div className="flex mt-4 space-x-3 md:mt-6">
                            <button
                                disabled={channel.code === '__default_channel__'}
                                onClick={() =>
                                    handleSelectChange(channel.token)
                                }
                                className={` ${channel.code === '__default_channel__'
                                    ? 'bg-gray-600 cursor-not-allowed'
                                    : 'bg-blue-700 dark:bg-blue-600 hover:bg-blue-800'
                                    } inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300  dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
                            >
                                {channel.code === '__default_channel__'
                                    ? 'Selecionado'
                                    : 'Selecionar'}
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
