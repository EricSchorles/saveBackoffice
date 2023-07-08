"use client";

import {
  FacetList,
  SortOrder,
  useFacetsQuery,
} from "@utils/generated/graphql";
import { Input, Table } from "antd";

import { Card } from "@components/Cards";
import { FiUsers } from "react-icons/fi";
import { PiTag } from "react-icons/pi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { graphqlRequestClient } from "@lib/graphql.request";
import useColumns from "./hooks/columnsList";
import { useState } from "react";

export default function FacetsPage() {
  const columns = useColumns();
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const client = graphqlRequestClient();
  const { data, isLoading } = useFacetsQuery(client, {
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

  const filteredData = data?.facets.items.filter((record: any) =>
    record.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-base text-black-60">Resumo das etiquetas Rodrigo</h3>
      <div className="flex gap-4 w-full">
        <Card.Root>
          <Card.Header
            iconLeft={<PiTag />}
            right={
              <span>
                Hoje <RiArrowDropDownLine />
              </span>
            }
          />
          <Card.Content>
            <Card.ContentItem title="Total etiquetas" description="11" />
            <Card.ContentItem title="Total etiquetas" description="11" />
            <Card.ContentItem title="Total etiquetas" description="11" />
          </Card.Content>
        </Card.Root>
        <Card.Root>
          <Card.Header
            iconLeft={<FiUsers />}
            right={
              <span>
                Hoje <RiArrowDropDownLine />
              </span>
            }
          />
          <Card.Content>
            <Card.ContentItem title="Total etiquetas" description="11" />
            <Card.ContentItem title="Total etiquetas" description="11" />
            <Card.ContentItem title="Total etiquetas" description="11" />
          </Card.Content>
        </Card.Root>
      </div>

      <div>
        <div className="flex justify-between items-center bg-[#F5F6FB] p-4 pb-0 rounded-lg">
          <h3 className="text-base text-black-60">Items das etiquetas</h3>
          <Input.Search
            placeholder="Pesquisar nome"
            allowClear
            onChange={(e) => handleSearch(e.target.value)}
            style={{ width: 200 }}
          />
        </div>
        <Table
          loading={isLoading}
          columns={columns}
          dataSource={filteredData}
          rowKey="id"
          pagination={{
            total: data?.facets?.totalItems,
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
      </div>
    </div>
  );
}
