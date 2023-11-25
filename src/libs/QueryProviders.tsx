"use client";
import React, { Children, ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
export default function QueryProviders({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
