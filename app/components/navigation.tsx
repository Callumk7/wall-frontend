import { Link } from "@remix-run/react";

export function Navigation() {
  return (
    <nav className="m-2 border border-foreground p-6">
      <Link to="/feed">Feed</Link>
    </nav>
  );
}
