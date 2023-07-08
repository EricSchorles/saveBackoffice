"use client";

import HeaderT from "../HeaderT";
import { IoNotifications } from "react-icons/io5";
import Toggle from "../Toggle";

/* import React, { useContext } from 'react';

import { Dropdown } from 'flowbite-react';
import Toggle from '@components/Toggle';
import { graphqlRequestClient } from '@lib/graphql.request';
import useChannel from '@hooks/useChannel';
import { useChannelsQuery } from '@utils/generated/graphql'; */

export const Header = () => {
  /*    const client = graphqlRequestClient();
    const { data } = useChannelsQuery(client);

    const { handleSelectChannel, channelSelected } = useChannel();

    const handleSelectChange = (value: string) => {
        handleSelectChannel(value);
    };  */

  return (
    <div className="w-full bg-white dark:bg-gray-800 text-black fixed top-0  z-50 h-16">
      menu
      <div className="flex gap-4 justify-end items-center h-full text-sm">
        <div className="bg-black w-5">
          adfadf asdfa asdf
          <HeaderT />
        </div>
        {/*    <Dropdown
                    label={
                        <span>{channelSelected?.code}</span>
                    }
                    style={{
                        backgroundColor: '#FEF5EA',
                        color: '#000000',
                        borderRadius: 8,
                        height: 32,
                        fontWeight: 400,
                    }}
                >
                    {data?.channels?.items.map((channel) => (
                        <Dropdown.Item
                            key={channel.id}
                            onClick={() => handleSelectChange(channel.token)}
                        >
                            {channel.code}
                        </Dropdown.Item>
                    ))}
                </Dropdown>*/}
        <IoNotifications className=" text-primary text-lg" />
        <Toggle />
      </div>
    </div>
  );
};
