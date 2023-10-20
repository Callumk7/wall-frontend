import { Link } from "@remix-run/react";

export function Navigation() {
  const links = [
    {
      to: "/feed",
      label: "Feed",
    },
    {
      to: "/users",
      label: "Users",
    },
    {
      to: "/groups",
      label: "Groups",
    },
    {
      to: "/components",
      label: "Components",
    },
  ];
  return (
    <nav className="m-2 flex flex-row gap-7 rounded-md border border-foreground p-6 shadow-sm shadow-primary">
      {links.map((link) => (
        <Link key={link.label} to={link.to}>
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
