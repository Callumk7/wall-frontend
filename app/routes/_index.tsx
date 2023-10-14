import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="m-4 w-full bg-red-50 p-10 text-center">
      <h1 className="text-4xl">Hello World</h1>
    </div>
  );
}
