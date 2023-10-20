import { MenuTrigger } from "react-aria-components";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { Menu, MenuItem, Popover } from "~/components/ui/menu";
import { Separator } from "~/components/ui/separator";
import { ToggleButton } from "~/components/ui/toggle-button";

// This page is for development: showing how components look and their variations
export default function ComponentPage() {
  return (
    <div className="mx-auto mt-10 w-4/5">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-5 rounded-md border border-foreground p-8">
          <h1 className="text-2xl font-bold">Buttons</h1>
          <div className="flex gap-3">
            <Button variant={"primary"} size={"md"}>
              Primary
            </Button>
            <Button variant={"primary"} size={"sm"}>
              Primary
            </Button>
          </div>
          <div className="flex gap-3">
            <Button variant={"secondary"} size={"md"}>
              Secondary
            </Button>
            <Button variant={"secondary"} size={"sm"}>
              Secondary
            </Button>
          </div>
          <div className="flex gap-3">
            <ToggleButton variant={"primary"} size={"md"}>
              Toggle Primary
            </ToggleButton>
          </div>
          <div className="flex gap-3">
            <MenuTrigger>
              <Button>Example Dropdown</Button>
              <Popover>
                <Menu>
                  <MenuItem>Action</MenuItem>
                  <Separator />
                  <MenuItem>Action</MenuItem>
                  <MenuItem>Action</MenuItem>
                  <MenuItem>Action</MenuItem>
                </Menu>
              </Popover>
            </MenuTrigger>
          </div>
        </div>
        <div className="flex flex-col gap-5 rounded-md border border-foreground p-8">
          <h1 className="text-2xl font-bold">Form Stuff</h1>
          <div className="flex gap-3">
            <Checkbox label="Unsubscribe" />
          </div>
        </div>
      </div>
    </div>
  );
}
