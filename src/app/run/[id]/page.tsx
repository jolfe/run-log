import Run from "@/app/components/run";
import { db } from "@/db";
import { useParams } from "next/navigation";

interface RunProps {
  params: {
    id: string;
  };
}

export default async function RunsPage({ params }: RunProps) {
  const run = await db.run.findFirst({
    where: {
      id: params.id,
    },
  });
  console.log(run);
  // return <Run id={id} />;
  return <code>{JSON.stringify(run)}</code>;
}
