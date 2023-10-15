import type  { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "The Wall" }, { name: "description", content: "This is Your Wall" }];
};


export default function Index() {
  return (
    <div>home page</div>   
  );
}
