"use client"

import { Input, Table } from "antd"
import {
  SortOrder,
  useProductVariantListQuery,
} from "@utils/generated/graphql"

import { graphqlRequestClient } from "@lib/graphql.request"
import useColumns from "../hooks/columnsList"
import { useState } from "react"

export default function ProductVariantsListing() {
  const client = graphqlRequestClient()
  const columns = useColumns()
  const [searchText, setSearchText] = useState("")
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(10)

  const { data } = useProductVariantListQuery(client, {
    options: {
      filter: {
        name: { contains: searchText },
      },
      sort: { createdAt: SortOrder.Desc },

      skip: page * 10 - 10,
      take: perPage,
    },
  })

  const handleSearch = (value: string) => {
    setSearchText(value)
  }

  return (
    <div className="flex flex-col gap-4 mt-4">
      <div>
        <div className="flex justify-between items-center bg-[#F5F6FB] p-4 pb-0 rounded-lg">
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
          dataSource={data?.productVariants?.items}
          rowKey="id"
          pagination={{
            total: data?.productVariants?.totalItems,
            pageSize: perPage,
            onShowSizeChange: (current, size) => {
              console.log("current", size)
              setPerPage(size)
            },
            current: page,
            defaultPageSize: 10,
            onChange: (page) => {
              setPage(page)
            },
          }}
        />
      </div>
    </div>
  )
}
