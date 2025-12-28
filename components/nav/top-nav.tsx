"use client"

import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
  } from "@/components/ui/menubar"
  import ModeToggle from "@/components/nav/mode-toggle"
import { MenubarSeparator } from "@radix-ui/react-menubar"
import Image from "next/image";
import Link from "next/link"
import { SignIn, SignInButton, SignedIn, SignedOut, UserButton} from "@clerk/nextjs"


function TopNav() {
   
  return (
    <Menubar>
        <div className="flex-none">
            <MenubarMenu>
                <Link href="/">
                <Image src="/logo.svg" height={50} width={50} alt="logo image" />
                </Link>
            </MenubarMenu>
        </div>

        <div className="flex grow items-center justify-end gap-1">
        <MenubarMenu>
            <MenubarTrigger className="text-base font-normal">
                Dashboard
            </MenubarTrigger>
            <MenubarContent>
                <MenubarItem>Task 1</MenubarItem>
                <MenubarItem>Task 2</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Task 3</MenubarItem>
            </MenubarContent>
        </MenubarMenu>
       <SignedIn>
        <UserButton />
       </SignedIn>

       <SignedOut>
        <SignInButton/>
       </SignedOut>
        
      <MenubarMenu>
        <ModeToggle />
      </MenubarMenu>
      </div>
    </Menubar>
  )
}

export default TopNav
