import { ModeToggle } from "@/src/components/ui";

export function ExampleRoute() {
  return (
    <>
      <div className="flex h-screen items-center">
        <div className="mx-auto max-w-7xl px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-16">
          <ModeToggle />
        </div>
      </div>
    </>
  );
}
