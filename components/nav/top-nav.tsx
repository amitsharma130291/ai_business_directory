"use client"

import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
  } from "@/components/ui/menubar"
  import ModeToggle from "@/components/nav/mode-toggle"
import { MenubarSeparator } from "@/components/ui/menubar"
import Image from "next/image";
import Link from "next/link"
import { SignInButton, SignedIn, SignedOut, UserButton} from "@clerk/nextjs"


function TopNav() {
   
  return (
    <Menubar>
        <div className="flex-none">
            <MenubarMenu>
                <Link href="/dashboard">
                <Image src="/logo.svg" height={50} width={50} alt="logo image" />
                </Link>
            </MenubarMenu>
        </div>

        <div className="flex grow items-center justify-end gap-1">
        <MenubarMenu>
            <MenubarTrigger asChild className="text-base font-normal">
                <Link href="/dashboard">Dashboard</Link>
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
