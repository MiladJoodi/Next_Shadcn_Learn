import UserItem from "./UserItem";

// "use client"
const Sidebar = () => {
    return (
        <div className="flex flex-col w-[300px] min-w-[300px] border-r min-h-screen p-4">
            {/* User Item */}
            <div>
                <UserItem />
            </div>

            <div className="grow">Menu</div>
            <div>Setting / Notification</div>
        </div>
    );
}

export default Sidebar;