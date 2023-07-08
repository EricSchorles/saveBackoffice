"use client";

import { graphqlRequestClient } from "@lib/graphql.request";
import { useCollectionQuery } from "@utils/generated/graphql";

export default function EditCollectionPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const client = graphqlRequestClient();
  const { data } = useCollectionQuery(
    client,
    {
      id,
    },
    {
      enabled: !!id,
    }
  );

  return <div>edit collection: {data?.collection?.name}</div>;
}
