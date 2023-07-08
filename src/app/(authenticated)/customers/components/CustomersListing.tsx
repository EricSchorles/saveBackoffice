"use client";

import { Input, Table } from "antd";
import { SortOrder, useGetCustomersQuery, useProductsQuery } from "@utils/generated/graphql";

import { graphqlRequestClient } from "@lib/graphql.request";
import { useState } from "react";
import useColumns from "../hooks/columnList";

export default function CustomersListing() {
  const client = graphqlRequestClient();
  const columns = useColumns();
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  const { data, isLoading } = useGetCustomersQuery(client, {
    options: {
      sort: { createdAt: SortOrder.Desc },

      skip: page * 10 - 10,
      take: perPage,
    },
  });

  const handleSearch = (value: string) => {
    setSearchText(value);
  };

  return (
    <div className="flex flex-col gap-4 mt-4">
      <div>
        <div className={`flex justify-between items-center bg-[#F5F6FB] ${!isLoading && data?.customers?.totalItems! > 0 ? 'dark:bg-secondary' : 'dark:bg-white'} p-4 pb-0 rounded-t-lg`}>
          <h3 className="text-base text-black-60">Items dos produtos</h3>
          <Input.Search
            placeholder="Pesquisar nome"
            allowClear
            onChange={(e) => handleSearch(e.target.value)}
            style={{ width: 200 }}
          />
        </div>
        <Table
          loading={!data}
          columns={columns}
          dataSource={data?.customers?.items}
          rowKey="id"
          rowSelection={{ type: "checkbox" }}
          className="rounded-t-none dark:bg-secondary"
          pagination={{
            total: data?.customers?.totalItems,
            pageSize: perPage,
            onShowSizeChange: (current, size) => {
              console.log("current", size);
              setPerPage(size);
            },
            current: page,
            defaultPageSize: 10,
            onChange: (page) => {
              setPage(page);
            },
          }}
        />
      </div>
    </div>
  );
}
