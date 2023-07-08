import { Button } from "@components/Buttons/Button";
import { CiImageOff } from "react-icons/ci";
import { DeleteButton } from "@components/Buttons/ButtonDeleteWithPopover";
import { Image } from "antd";
import Link from "next/link";
import { useMemo } from "react";

const useColumns = () => {
  const columns = useMemo(
    () => [
      {
        title: "Id",
        dataIndex: "id",
        key: "id",
        render: (preview: string) => {
          return preview ? (
            <div
              style={{
                maxWidth: "160px",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              Id: {preview}
            </div>
          ) : (
            <CiImageOff fontSize={40} />
          );
        },
      },
      {
        title: "Status",
        dataIndex: "status",
        key: "status",
        render: (name: string) => {
          return (
            <div
              style={{
                maxWidth: "160px",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              Status: {name}
            </div>
          );
        },
      },
      {
        title: "Email",
        dataIndex: "emailAddress",
        key: "emailAddress",
        render: (e) => {
          return <span>Email: {e}</span>;
        },
      },
    ],
    []
  );

  return columns;
};

export default useColumns;
