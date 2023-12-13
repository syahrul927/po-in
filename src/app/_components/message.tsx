"use client";

import { api } from "~/trpc/react";

export default function Message() {
  const { data, refetch, isRefetching } = api.post.getSecretMessage.useQuery(
    undefined,
    {
      enabled: false,
    },
  );
  return (
    <button
      onClick={() => refetch()}
      className="rounded-xl border border-white bg-slate-200/20 px-4 py-6 backdrop-blur-lg"
    >
      {isRefetching ? "Loading" : data ?? "Message is Locked"}
    </button>
  );
}
