"use client";

import {
  Input,
  Button,
  Textarea,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import * as actions from "@/actions";
import { useFormState } from "react-dom";
import FormButton from "@/app/components/common/FormButton";

export default function TopicCreateForm() {
  const [formState, action] = useFormState(actions.createRun, {
    errors: {},
  });

  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">Log a Run</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Log a Run</h3>
            <Input
              name="startTime"
              label="Start Time"
              labelPlacement="outside"
              placeholder="Start Time"
              isInvalid={!!formState.errors.startTime}
              errorMessage={formState.errors?.startTime?.join(", ")}
            />
            <Input
              name="endTime"
              label="End Time"
              labelPlacement="outside"
              placeholder="End Time"
              isInvalid={!!formState.errors.endTime}
              errorMessage={formState.errors?.endTime?.join(", ")}
            />
            <Input
              type="number"
              name="distance"
              label="Distance"
              labelPlacement="outside"
              placeholder="Distance"
              isInvalid={!!formState.errors.distance}
              errorMessage={formState.errors?.distance?.join(", ")}
            />
            <Input
              type="number"
              name="duration"
              label="Duration"
              labelPlacement="outside"
              placeholder="Duration"
              isInvalid={!!formState.errors.duration}
              errorMessage={formState.errors?.duration?.join(", ")}
            />
            <Input
              type="number"
              name="pace"
              label="Pace"
              labelPlacement="outside"
              placeholder="Pace"
              isInvalid={!!formState.errors.pace}
              errorMessage={formState.errors?.pace?.join(", ")}
            />
            <Input
              type="calories"
              name="calories"
              label="Calories"
              labelPlacement="outside"
              placeholder="Calories"
              isInvalid={!!formState.errors.calories}
              errorMessage={formState.errors?.calories?.join(", ")}
            />
            <Input
              type="number"
              name="avgHr"
              label="Avg HR"
              labelPlacement="outside"
              placeholder="Avg HR"
              isInvalid={!!formState.errors.avgHr}
              errorMessage={formState.errors?.avgHr?.join(", ")}
            />
            <Input
              type="number"
              name="maxHr"
              label="Max HR"
              labelPlacement="outside"
              placeholder="Max HR"
              isInvalid={!!formState.errors.maxHr}
              errorMessage={formState.errors?.maxHr?.join(", ")}
            />
            <Textarea
              name="notes"
              label="Notes"
              labelPlacement="outside"
              placeholder="Notes"
              isInvalid={!!formState.errors.notes}
              errorMessage={formState.errors?.notes?.join(", ")}
            />
            {formState.errors._form ? (
              <div className="p-2 bg-red-200 rounded border border-red-400">
                {formState.errors._form.join(", ")}
              </div>
            ) : null}
            <FormButton>Submit</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
