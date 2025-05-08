import {
  Menu,
  MenuButton,
  MenuHeading,
  MenuItem,
  MenuItems,
  MenuSection,
  MenuSeparator,
} from "@headlessui/react";

function Dropdown() {
  return (
    <Menu>
      <MenuButton className="data-active:bg-blue-500">My account</MenuButton>
      <MenuItems anchor="bottom end">
        <MenuItem disabled>
          <a
            className="block data-[disabled]:opacity-50"
            href="/invite-a-friend"
          >
            Invite a friend (coming soon!)
          </a>
        </MenuItem>
        <MenuSeparator className="my-1 h-px bg-black" />
        <MenuItem>
          <a className="block data-focus:bg-blue-100" href="/settings">
            Settings
          </a>
        </MenuItem>
        <MenuItem>
          <a className="block data-focus:bg-blue-100" href="/support">
            Support
          </a>
        </MenuItem>
        <MenuItem>
          <a className="block data-focus:bg-blue-100" href="/license">
            License
          </a>
        </MenuItem>
        <MenuSection>
          <MenuHeading className="text-sm opacity-50">Settings</MenuHeading>
          <MenuItem>
            <a className="block data-[focus]:bg-blue-100" href="/profile">
              My profile
            </a>
          </MenuItem>
          <MenuItem>
            <a className="block data-[focus]:bg-blue-100" href="/notifications">
              Notifications
            </a>
          </MenuItem>
        </MenuSection>
      </MenuItems>
    </Menu>
  );
}

export default Dropdown;
