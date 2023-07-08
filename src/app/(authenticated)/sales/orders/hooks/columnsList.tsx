import { Button } from "@components/Buttons/Button";
import { DeleteButton } from "@components/Buttons/ButtonDeleteWithPopover";
import Link from "next/link";
import { Tag } from "@components/Tags";
import { useMemo } from "react";

const useColumns = () => {
  const columns = useMemo(
    () => [
      {
        title: "Código",
        dataIndex: "code",
        key: "code",
      },
      {
        title: "Visibilidade",
        dataIndex: "state",
        key: "state",
        render: (isPrivate: boolean) => {
          return !isPrivate ? (
            <Tag text="Publico" styleType="primary" />
          ) : (
            <Tag text="Privado" styleType="secondary" />
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
              <Link href={`/${id}`}>
                <Button typeStyle="edit" />{" "}
              </Link>
              <DeleteButton
                onClick={() => console.log("deletar")}
                text="Deseja deletar esta etiqueta?"
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
