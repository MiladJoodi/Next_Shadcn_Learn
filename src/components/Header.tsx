'use client';

import { Button } from "@/components/ui/button"
import { CommandDemo } from "./Command";
import { BellIcon } from "lucide-react"

const Header = () => {
    return (
        <div className="grid grid-cols-2 gap-4 p-4 border-b">
            <CommandDemo />

            <div className="flex items-center justify-end">
                <Button variant="outline" size="icon">
                    <BellIcon className="h-4 w-4" />
                </Button>
            </div>
        </div>
    );
}

export default Header;