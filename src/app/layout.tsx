"use client";

import "@styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ApolloProvider } from '@apollo/client';
import { ContextProviderChannel } from "@contexts/channel-context";
import { Poppins } from "next/font/google";
import Script from "next/script";
import { SidebarProvider } from "@contexts/sidebar";
import { ThemeProvider } from "next-themes";
import { ToastContainer } from "react-toastify";
import client from "./client";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: 2,
        staleTime: 5 * 1000,
      },
    },
  });

  return (
    <html lang="en">
      <body className={poppins.className}>
        <ApolloProvider client={client}>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider defaultTheme="dark" attribute="class">
              <ContextProviderChannel>
                <SidebarProvider>{children}</SidebarProvider>
              </ContextProviderChannel>
            </ThemeProvider>
          </QueryClientProvider>
          <ToastContainer />
        </ApolloProvider>
      </body>
    </html>
  );
}
