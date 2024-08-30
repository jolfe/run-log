import { db } from "@/db";

interface RunProps {
  id: string | string[];
}

export default async function Run({ id }: RunProps) {
  const run = await db.run.findFirst({
    where: {
      id: id as string,
    },
  });

  return <code>{JSON.stringify(run)}</code>;
}
