"use client";

import { db } from "@/db";
import { useParams } from "next/navigation";

export default async function RunsPage() {
  const params = useParams();
  const { id } = params;

  const run = await db.run.findFirst({
    where: {
      id: {
        equals: id as string,
      },
    },
  });

  return <code>{JSON.stringify(run)}</code>;
}
