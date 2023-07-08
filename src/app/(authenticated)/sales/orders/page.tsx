"use client";

import { Input, Table } from "antd";
import {
  Order,
  OrderList,
  SortOrder,
  useGetOrderListQuery,
} from "@utils/generated/graphql";

import { Card } from "@components/Cards";
import { FiUsers } from "react-icons/fi";
import { PiTag } from "react-icons/pi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { graphqlRequestClient } from "@lib/graphql.request";
import useColumns from "./hooks/columnsList";
import { useState } from "react";

export default function OrdesPage() {
  const columns = useColumns();

  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  const client = graphqlRequestClient();
  const { data, isLoading } = useGetOrderListQuery(client, {
    options: {
      sort: { createdAt: SortOrder.Desc },

      skip: page * 10 - 10,
      take: perPage,
    },
  });

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-base text-black-60">Resumo das ordens</h3>
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
            <Card.ContentItem title="Total ordens" description="11" />
            <Card.ContentItem title="Total ordens" description="11" />
            <Card.ContentItem title="Total ordens" description="11" />
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
            <Card.ContentItem title="Total ordens" description="11" />
            <Card.ContentItem title="Total ordens" description="11" />
            <Card.ContentItem title="Total ordens" description="11" />
          </Card.Content>
        </Card.Root>
      </div>

      <div>
        <div className="flex justify-between items-center bg-[#F5F6FB] p-4 pb-0 rounded-lg">
          <h3 className="text-base text-black-60">Items das ordens</h3>
        </div>
        <Table
          loading={isLoading}
          columns={columns}
          dataSource={data?.orders?.items}
          rowKey="id"
          pagination={{
            total: data?.orders?.totalItems,
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
