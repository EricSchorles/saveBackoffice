import { ChannelContext } from "@contexts/channel-context";
import { useContext } from "react";

const useChannel = () => {
  return useContext(ChannelContext);
};

export default useChannel;
