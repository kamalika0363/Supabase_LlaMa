"use client";

import GroupCard from "@/components/GroupCard";

const SideBar = () => {
    const handleGroupSelection = () => {
    };

    return (
        <div>
            <div className="bg-gradient-to-r from-[#000000] to-[#090909] sm:p-6 rounded-xl flex flex-col  md:h-full  border-2 border-[#272728] overflow-auto p-4 ">
                <div
                    className={`font-semibold p-2 mb-4 justify-center flex`}
                >Groups</div>
                <GroupCard onSelectGroup={handleGroupSelection} />
            </div>
        </div>
    );
};

export default SideBar;
