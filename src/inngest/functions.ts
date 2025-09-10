import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    //This is an Transcript Step.
    await step.sleep("wait-a-moment", "10s");

    //This is an Summary Step.
    await step.sleep("wait-a-moment", "5s");

    return { message: `Hello ${event.data.email}!` };
  },
);
