
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, User } from "@nextui-org/react";
import { Link, useNavigate } from "react-router-dom";

export default function UserAvatar() {
  const nav = useNavigate();
  const logout = () => {

    localStorage.clear();
    nav('/');

  }
  return (
    <div className="flex items-center gap-4">
      <Dropdown placement="bottom-end">
        <DropdownTrigger>

          <img src="https://cdn-icons-png.flaticon.com/256/9230/9230519.png" className="w-12 h-12 border-3 rounded-full p-[2px]" />

        </DropdownTrigger>

        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-8 mt-4" >
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold" style={{ position: 'relative', top: '-12px' }}>zoey@example.com</p>
          </DropdownItem>
          <DropdownItem key="settings"> My Settings </DropdownItem>
          <DropdownItem key="team_settings">Team Settings</DropdownItem>
          <DropdownItem key="analytics"> Analytics </DropdownItem>
          <DropdownItem key="system">System</DropdownItem>
          <DropdownItem key="configurations">Configurations</DropdownItem>
          <DropdownItem key="help_and_feedback"> Help & Feedback </DropdownItem>
          <DropdownItem key="logout" color="danger" onClick={logout}> Log Out </DropdownItem>
        </DropdownMenu>
      </Dropdown>

    </div>
  );
}
