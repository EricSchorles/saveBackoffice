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
        title: "",
        dataIndex: "preview",
        key: "preview",
        render: (preview: string) => {
          return preview ? (
            <Image
              alt="Imagem do produto"
              src={process.env.NEXT_PUBLIC_URL + preview}
              width={160}
              height={160}
              style={{ borderRadius: 5, objectFit: "cover" }}
            />
          ) : (
            <CiImageOff fontSize={40} />
          );
        },
      },
      {
        title: "",
        dataIndex: "name",
        key: "name",
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
              Nome: {name}
            </div>
          );
        },
      },
      {
        title: "",
        dataIndex: "id",
        key: "id",
        render: (e) => {
          return <span>Id: {e}</span>;
        },
      },

      {
        title: "",
        dataIndex: "id",
        key: "id",
        width: 150,
        render: (id: string) => {
          return (
            <div className="flex gap-2">
              <Link href={`/catalog/assets/${id}`}>
                <Button typeStyle="edit" />{" "}
              </Link>
              <DeleteButton
                onClick={() => console.log("deletar")}
                text="Deseja deletar esta imagem?"
              />
            </div>
          );
        },
      },
    ],
    []
  );

  return columns;
};

export default useColumns;
