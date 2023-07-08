"use client";

import "@styles/globals.css";

import { Layout } from "@components/Layout";

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Layout>
        <main>{children}</main>
      </Layout>
    </>
  );
}
