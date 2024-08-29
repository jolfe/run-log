"use server";

import { z } from "zod";
import { auth } from "@/auth";
import type { Run } from "@prisma/client";
import { redirect } from "next/navigation";
import { db } from "@/db";
import { revalidatePath } from "next/cache";
import { randomUUID } from "crypto";

const createTopicSchema = z.object({
  id: z.string(),
  userId: z.string(),
  startTime: z.date(),
  endTime: z.date().optional(),
  distance: z.number(),
  duration: z.number(),
  pace: z.number(),
  calories: z.number(),
  avgHr: z.number(),
  maxHr: z.number(),
  notes: z.string().optional(),
});

interface CreateRunFormState {
  errors: {
    id?: string[];
    userId?: string[];
    startTime?: string[];
    endTime?: string[];
    distance?: string[];
    duration?: string[];
    pace?: string[];
    calories?: string[];
    avgHr?: string[];
    maxHr?: string[];
    notes?: string[];
    _form?: string[];
  };
}

export async function createRun(
  formState: CreateRunFormState,
  formData: FormData
): Promise<CreateRunFormState> {
  const session = await auth();

  const result = createTopicSchema.safeParse({
    id: randomUUID(),
    userId: session?.user?.id,
    startTime: new Date(formData.get("startTime") as string),
    endTime: formData.get("endTime")
      ? new Date(formData.get("endTime") as string)
      : undefined,
    distance: Number(formData.get("distance")),
    duration: Number(formData.get("duration")),
    pace: Number(formData.get("pace")),
    calories: Number(formData.get("calories")),
    avgHr: Number(formData.get("avgHr")),
    maxHr: Number(formData.get("maxHr")),
    notes: formData.get("notes") as string,
  });

  if (!result.success) {
    console.log(result.error.flatten().fieldErrors);
    return { errors: result.error?.flatten().fieldErrors };
  }

  if (!session || !session.user) {
    return {
      errors: { _form: ["You must be signed in."] },
    };
  }

  let run: Run;
  try {
    run = await db.run.create({
      data: {
        id: result.data.id,
        userId: result.data.userId,
        startTime: result.data.startTime,
        endTime: result.data.endTime,
        distance: result.data.distance,
        duration: result.data.duration,
        pace: result.data.pace,
        calories: result.data.calories,
        avgHr: result.data.avgHr,
        maxHr: result.data.maxHr,
        notes: result.data.notes,
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        errors: {
          _form: [err.message],
        },
      };
    } else {
      return {
        errors: {
          _form: ["An unknown error occurred"],
        },
      };
    }
  }

  console.log("Created run", run);

  redirect("/runs");

  return {
    errors: {},
  };
}
