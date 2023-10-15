import { Link } from "@remix-run/react";

export function Navigation() {
  return (
    <nav className="m-2 rounded-md border border-foreground p-6 shadow-sm shadow-primary">
      <Link to="/feed">Feed</Link>
    </nav>
  );
}
