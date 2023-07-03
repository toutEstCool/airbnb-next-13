'use client';

import Container from "../container/Container"
import Logo from "./logo/Logo"
import Search from "./search/Search"
import UserMenu from "./usermenu/UserMenu"
import { SafeUser } from "@/app/types";

interface IPropsNavBar {
  currentUser?: SafeUser | null
}

const NavBar: React.FC<IPropsNavBar> = ({ currentUser }): JSX.Element => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser}/>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default NavBar