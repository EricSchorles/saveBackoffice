"use client";

import { graphqlRequestClient } from "@lib/graphql.request";
import { useProductQuery } from "@utils/generated/graphql";

export default function EditProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const client = graphqlRequestClient();
  const { data } = useProductQuery(
    client,
    {
      id,
    },
    {
      enabled: !!id,
    }
  );

  return <div>edit product: {data?.product?.name}</div>;
}
