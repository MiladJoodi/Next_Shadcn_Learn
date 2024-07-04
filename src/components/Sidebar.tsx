// "use client"
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
                    text: "Profile"
                },
                {
                    link: "/",
                    text: "Billing"
                },
                {
                    link: "/",
                    text: "Notification"
                },
            ]
        },
        {
            group: "Settings",
            items: [
                {
                    link: "/",
                    text: "General Settings"
                },
                {
                    link: "/",
                    text: "Privacy"
                },
                {
                    link: "/",
                    text: "Log"
                },
            ]
        }
    ]
    
    return (
        <div className="flex flex-col gap-4 w-[300px] min-w-[300px] border-r min-h-screen p-4">
            {/* User Item */}
            <div>
                <UserItem />
            </div>

            {/* Menu */}
            <div className="grow">
                <Command>
                    <CommandList>
                        {menuList.map((menu:any, key:number)=> (
                            <CommandGroup key={key} heading={menu.group}>
                            {menu.items.map((option: any, optionKey: number)=> (
                                <CommandItem key={optionKey}>{option.text}</CommandItem>
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