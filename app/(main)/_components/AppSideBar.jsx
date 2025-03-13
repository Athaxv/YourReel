"use client"
import { Button } from "@/components/ui/button"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
  } from "@/components/ui/sidebar"
import { Gem, HomeIcon, LucideFileVideo, Search, WalletCards } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
  
  const MenuItems = [
    {
        title: 'Home',
        url: '/dashboard',
        icon: HomeIcon
    },
    {
        title: 'Create New Video',
        url: '/create-new-video',
        icon: LucideFileVideo
    },
    {
        title: 'Explore',
        url: '/explore',
        icon: Search
    },
    {
        title: 'Billing',
        url: '/billing',
        icon: WalletCards
    },
  ]

  export function AppSidebar() {
    const path = usePathname();
    return (
      <Sidebar>
        <SidebarHeader>
            <div className="p-3">
            <div className="flex gap-2 items-center justify-start">
                <Image src={'/newlogo.svg'} alt='logo' height={30} width={30}/>
                <h2 className="font-bold text-xl">YourReel</h2>
            </div>
            <Button variant={'outline'} className="mt-3 rounded-xl flex text-center">AI Short Generator</Button>
            </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <div className=" mt-1">
                <Button className="w-full font-bold">+Create New Video</Button>
            </div>
            <SidebarMenu>
                {MenuItems.map((menu, index) => (
                    <SidebarMenuItem key={menu.title}>
                        <SidebarMenuButton isActive={path == menu.url ? 'true' : 'false'} className="mt-5 p-5">
                            <div>
                            <Link href={menu.url} className="flex justify-center items-center gap-4">
                            <div className=" flex items-center justify-center gap-4 ">
                            <menu.icon></menu.icon>
                            <span>{menu.title}</span>
                            </div>
                            </Link>
                            </div>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
          </SidebarGroup>
          <SidebarGroup />
        </SidebarContent>
        <SidebarFooter>
            <div className="p-5 border rounded-lg mb-6 bg-gray-800">
                <div className="flex items-center justify-between text-gray-400">
                    <Gem/>
                    <h2>5 Credits Left</h2>
                </div>
                <Button className="w-full mt-3">Buy More Credits</Button>
            </div>
        </SidebarFooter>
      </Sidebar>
    )
  }
  