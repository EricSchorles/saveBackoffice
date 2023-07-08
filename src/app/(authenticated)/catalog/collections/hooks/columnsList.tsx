import { Button } from "@components/Buttons/Button";
import { DeleteButton } from "@components/Buttons/ButtonDeleteWithPopover";
import Link from "next/link";
import { useMemo } from "react";

const useColumns = () => {
  const columns = useMemo(
    () => [
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
        title: "Ações",
        dataIndex: "id",
        key: "id",
        width: 150,
        render: (id: string) => {
          return (
            <div className="flex gap-2">
              <Link href={`/catalog/collections/${id}`}>
                <Button typeStyle="edit" />{" "}
              </Link>
              <DeleteButton
                onClick={() => console.log("deletar")}
                text="Deseja deletar esta coleção?"
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
