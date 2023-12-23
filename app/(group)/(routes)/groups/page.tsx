"use client";

import LinkBox from "@/components/LinkBox";
import SummaryBox from "@/components/SummarizerBox";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {ArrowLeft} from "lucide-react";

const Group = () => {

    return (
        <div>
            <div className="flex flex-row gap-4">
                <div className="flex flex-row items-center">
                    <Button className="bg-black border my-4">
                        <Link href={"/dashboard"}>
                            <div className="flex items-center">
                                <ArrowLeft className="text-white mr-2" />
                                <span className="text-white">Go Back</span>
                            </div>
                        </Link>
                    </Button>
                </div>
                <div className="text-white mt-5 justify-center font-semibold text-xl">
                    Group 1
                </div>
            </div>
            <div className="flex flex-row gap-4 p-4">
                <SummaryBox/>
                <LinkBox/>
            </div>
        </div>
    );
};

export default Group;
