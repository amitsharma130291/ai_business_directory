
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import ModeToggle from "@/components/nav/mode-toggle";
import { MenubarSeparator } from "@/components/ui/menubar";
import Image from "next/image";
import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Plus, LayoutDashboard, LogIn } from "lucide-react";
import { currentUser } from '@clerk/nextjs/server'

async function TopNav() {

  const user = await currentUser();
  return (
    <Menubar>
      <div className="flex-none">
        <MenubarMenu>
          <Link href="/dashboard">
            <Image src="/logo.svg" height={50} width={50} alt="logo image" />
          </Link>
        </MenubarMenu>
      </div>

      <div className="flex grow items-center justify-end gap-4">
      {
            user &&
        <>
       
        <MenubarMenu>
          <MenubarTrigger asChild className="text-base font-normal">
            <span className="flex items-center gap-1">
              <Plus size={16} />
              <Link href="/business/add">Add Business</Link>
            </span>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
         
            <MenubarTrigger asChild className="text-base font-normal ">
            <span className="flex item-center gap-1">
              <LayoutDashboard size={16} />
              <Link href="/dashboard">Dashboard</Link>
            </span>
          </MenubarTrigger>
         
         
          <MenubarContent>
            <MenubarItem>Task 1</MenubarItem>
            <MenubarItem>Task 2</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Task 3</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        </>
}
        <SignedIn>
          <UserButton />
        </SignedIn>

        <SignedOut>
          <span className="flex items-center gap-1">
            <LogIn size={16} />
            <SignInButton />
          </span>
        </SignedOut>

        <MenubarMenu>
          <ModeToggle />
        </MenubarMenu>
      </div>
    </Menubar>
  );
}

export default TopNav;
