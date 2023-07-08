import { ChannelsQuery, useChannelsQuery } from "@utils/generated/graphql";
import React, { createContext } from "react";

import { graphqlRequestClient } from "@lib/graphql.request";
import { setCookie } from "nookies";

type ContextType = {
  channels: ChannelsQuery["channels"] | null;
  handleSelectChannel: (channelToken: string) => void;
  refetch: () => void;
  isLoading: boolean;
  channelSelected?: ChannelsQuery["channels"]["items"][0];
};

export const ChannelContext = createContext<ContextType>({} as ContextType);

export const ContextProviderChannel = ({ children }: any) => {
  const client = graphqlRequestClient();
  const {
    data: channels,
    isLoading,
    refetch,
  } = useChannelsQuery<ChannelsQuery>(client);
  const [channelSelected, setChannelSelected] =
    React.useState<ChannelsQuery["channels"]["items"][0]>();

  const handleSelectChannel = (channelToken: string) => {
    // localStorage.setItem("channel-token", channelToken);
    setCookie(null, "channel.token", channelToken, {
      maxAge: 30 * 24 * 60 * 60,
    });

    const channel = channels?.channels?.items.find(
      (channel) => channel.token === channelToken
    );
    setChannelSelected(channel);
  };

  // React.useEffect(() => {
  //     const channel = channels?.channels?.items[0]
  //     setChannelSelected(channel);
  // }, [channels]);

  const contextValue: ContextType = {
    channels: channels?.channels || null,
    handleSelectChannel,
    isLoading,
    refetch,
    channelSelected,
  };

  return (
    <ChannelContext.Provider value={contextValue}>
      {children}
    </ChannelContext.Provider>
  );
};
