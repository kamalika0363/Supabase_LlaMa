import React, { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Link from 'next/link';

interface Group {
    status: string;
    group: string;
    deadline: string;
    credits: number;
    href: string;
}

interface GroupCardProps {
    data: Group[];
}

const GroupCard: React.FC<GroupCardProps> = ({ data }) => {
    const [groupData, setGroupData] = useState<Group[]>(data);

    const handleCheckboxClick = (index: number) => {
        const updatedGroupData = [...groupData];
        updatedGroupData[index].status = updatedGroupData[index].status === 'Pending' ? 'Done' : 'Pending';
        setGroupData(updatedGroupData);
    };

    return (
        <div className="text-white">
            <Table className="border border-white mt-20 flex flex-col rounded-xl">
                <TableCaption className="mb-2 text-xl font-semibold">Completed Work</TableCaption>
                <TableHeader className="">
                    <TableRow>
                        <TableHead className="w-[150px]">Status</TableHead>
                        <TableHead className="w-[150px]">Group</TableHead>
                        <TableHead className="w-[150px]">Deadline</TableHead>
                        <TableHead className="text-right w-[80px]">Credits</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {groupData.map((group: Group, index: number) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium w-[150px]">
                                <Checkbox className="mr-2" />
                                {group.status}
                            </TableCell>
                            <TableCell className="w-[150px]">
                                <Link href={group.href}>
                                    {group.group}
                                </Link>
                            </TableCell>
                            <TableCell className="w-[150px]">{group.deadline}</TableCell>
                            <TableCell className="text-right w-[80px] text-center">{group.credits}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default GroupCard;
