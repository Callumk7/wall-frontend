import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "The Wall" },
    { name: "description", content: "This is Your Wall" },
  ];
};

export default function Index() {
  return (
    <div className="m-4 w-full bg-primary p-10 text-center">
      <h1 className="text-4xl">Hello, Deployment</h1>
    </div>
  );
}
