"use client"
import { Bell, Cookie, CreditCard, Inbox, MessageSquare, Settings, User } from "lucide-react";
import UserItem from "./UserItem";
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
  
const Sidebar = () => {

    const menuList = [
        {
            group: "General",
            items: [
                {
                    link: "/",
                    icon: <User />,
                    text: "Profile"
                },
                {
                    link: "/",
                    icon: <Inbox />,
                    text: "Inbox"
                },
                {
                    link: "/",
                    icon: <CreditCard />,
                    text: "Billing"
                },
                {
                    link: "/",
                    icon: <Bell />,
                    text: "Notification"
                },
            ]
        },
        {
            group: "Settings",
            items: [
                {
                    link: "/",
                    icon: <Settings />,
                    text: "General Settings"
                },
                {
                    link: "/",
                    icon: <Cookie />,
                    text: "Privacy"
                },
                {
                    link: "/",
                    icon: <MessageSquare />,
                    text: "Log"
                },
            ]
        }
    ]
    
    return (
        <div className="fixed flex flex-col gap-4 w-[300px] min-w-[300px] border-r min-h-screen p-4">
            {/* User Item */}
            <div>
                <UserItem />
            </div>

            {/* Menu */}
            <div className="grow">
                <Command style={{overflow: "visible"}}>
                    <CommandList style={{overflow: "visible"}}>
                        {menuList.map((menu:any, key:number)=> (
                            <CommandGroup key={key} heading={menu.group}>
                            {menu.items.map((option: any, optionKey: number)=> (
                                <CommandItem key={optionKey} className="flex gap-2 cursor-pointer">
                                    {option.icon}
                                    {option.text}
                                    </CommandItem>
                            ))}
                        </CommandGroup>
                        ))}
                    </CommandList>
                </Command>
            </div>

            <div>Setting / Notification</div>
        </div>
    );
}

export default Sidebar;