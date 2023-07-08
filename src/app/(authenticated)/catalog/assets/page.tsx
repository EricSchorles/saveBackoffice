"use client";

import { Input, List, Table } from "antd";
import { SortOrder, useGetAssetListQuery } from "@utils/generated/graphql";

import { graphqlRequestClient } from "@lib/graphql.request";
import useColumns from "./hooks/columnsList";
import { useState } from "react";

export default function CollectionsPage() {
  const columns = useColumns();
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  const client = graphqlRequestClient();
  const { data } = useGetAssetListQuery(client, {
    options: {
      filter: {
        name: { contains: searchText },
      },
      sort: { createdAt: SortOrder.Desc },

      skip: page * 10 - 10,
      take: perPage,
    },
  });

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
        className="imageTable"
        loading={!data}
        columns={columns}
        dataSource={data?.assets?.items}
        rowKey="id"
        pagination={{
          total: data?.assets?.totalItems,
          pageSize: perPage,

          onShowSizeChange: (current, size) => {
            setPerPage(size);
          },
          current: page,
          onChange: (page) => {
            setPage(page);
          },
        }}
      />
    </List>
  );
}
