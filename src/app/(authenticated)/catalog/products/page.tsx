"use client";

import { Button } from "@components/Buttons/Button";
import { Card } from "@components/Cards";
import { FiUsers } from "react-icons/fi";
import ProductVariantsListing from "./components/ProductVariantsListing";
import ProductsListing from "./components/ProductsListing";
import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TabsComponent } from "@components/Tabs";

export default function ProductsPage() {
  const tabs = [
    { id: "0", title: "Produtoss", content: <ProductsListing /> },
    {
      id: "1",
      title: "Produtos variantes",
      content: <ProductVariantsListing />,
    },
    {
      id: "2",
      title: "Locais de estoque",
      content: <Button text="c2" />,
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-base text-black-60">Resumo dos produtos</h3>

      <div className="flex gap-4 w-full">
        <Card.Root background="primary">
          <Card.Header type="primary" iconLeft={<FiUsers />} />
          <Card.Content>
            <Card.ContentItem
              type="primary"
              title="Total produtos"
              description="111"
            />
            <Card.ContentItem
              type="primary"
              title="Total produtos"
              description="111"
            ></Card.ContentItem>
            <Card.ContentItem
              type="primary"
              title="Total produtos"
              description="112"
            ></Card.ContentItem>
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
            <Card.ContentItem title="Total produtos" description="11" />
            <Card.ContentItem title="Total produtos" description="11" />
            <Card.ContentItem title="Total produtos" description="11" />
          </Card.Content>
        </Card.Root>
      </div>
      <TabsComponent tabs={tabs} />
    </div>
  );
}
