import { Button } from "@components/Buttons/Button";
import { CiImageOff } from "react-icons/ci";
import { DeleteButton } from "@components/Buttons/ButtonDeleteWithPopover";
import { Image } from "antd";
import Link from "next/link";
import { Tag } from "@components/Tags";
import { useMemo } from "react";

const useColumns = () => {
  const columns = useMemo(
    () => [
      {
        title: "Imagem",
        dataIndex: "featuredAsset",
        key: "featuredAsset",
        render: (featuredAsset: any) => {
          return featuredAsset?.preview ? (
            <Image
              alt="Imagem do produto"
              src={process.env.NEXT_PUBLIC_URL + featuredAsset?.preview}
              width={50}
              height={50}
              style={{ borderRadius: 5, objectFit: "cover" }}
            />
          ) : (
            <CiImageOff fontSize={40} />
          );
        },
      },
      {
        title: "Nome",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Slug",
        dataIndex: "slug",
        key: "slug",
      },
      {
        title: "Status",
        dataIndex: "enabled",
        key: "enabled",
        render: (enabled: boolean) => {
          return enabled ? (
            <Tag text="Ativo" styleType="primary" />
          ) : (
            <Tag text="Inativo" />
          );
        },
      },
      {
        title: "Ações",
        dataIndex: "id",
        key: "id",
        width: 150,
        render: (id: string) => {
          return (
            <div className="flex gap-2">
              <Link href={`/catalog/products/${id}`}>
                <Button typeStyle="edit" />{" "}
              </Link>
              <DeleteButton
                onClick={() => console.log("deletar")}
                text="Deseja deletar este produto?"
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
