import { db } from "@/db";
import { Chip, Link } from "@nextui-org/react";

export default async function RunsPage() {
  const runs = await db.run.findMany();

  const renderedTopics = runs.map((run) => {
    return (
      <div key={run.id} className="my-2">
        <Link href={`/${run.id}`}>
          <Chip variant="shadow">
            {run.startTime.toLocaleDateString()} - {run.distance}mi
          </Chip>
        </Link>
      </div>
    );
  });

  return <div>{renderedTopics}</div>;
}
