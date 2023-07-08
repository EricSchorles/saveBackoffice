"use client";

import { Input, List, Table } from "antd";
import { SortOrder, useCollectionsQuery } from "@utils/generated/graphql";

import { graphqlRequestClient } from "@lib/graphql.request";
import useColumns from "./hooks/columnsList";
import { useState } from "react";

export default function CollectionsPage() {
  const columns = useColumns();
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  const client = graphqlRequestClient();
  const { data } = useCollectionsQuery(client, {
    options: {
      filter: {
        name: { contains: searchText },
      },
      sort: { createdAt: SortOrder.Desc },

      skip: page * 10 - 10,
      take: perPage,
    },
  });

  const totalPages =
    data?.collections.totalItems &&
    Math.ceil(data?.collections?.totalItems / 10);

  const handleSearch = (value: string) => {
    setSearchText(value);
  };

  return (
    <List>
      <Input.Search
        placeholder="Pesquisar nome"
        allowClear
        onChange={(e) => handleSearch(e.target.value)}
        style={{ width: 200, marginBottom: 16 }}
      />
      <Table
        loading={!data}
        columns={columns}
        dataSource={data?.collections?.items}
        rowKey="id"
        pagination={{
          total: totalPages,
          pageSize: perPage,
          onShowSizeChange: (current, size) => {
            setPerPage(size);
          },
          current: page,
          defaultPageSize: 10,
          onChange: (page) => {
            setPage(page);
          },
        }}
      />
    </List>
  );
}
