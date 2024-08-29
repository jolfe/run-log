import { Button } from "@nextui-org/react";
import * as actions from "@/actions";
import CreateRunForm from "@/app/components/create-run-form";

export default function Home() {
  return (
    <div>
      <form action={actions.signIn}>
        <Button type="submit">Log In</Button>
      </form>

      <CreateRunForm />
    </div>
  );
}
