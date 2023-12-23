"use client";
import DataComponent from "@/app/(dashboard)/(routes)/dashboard/data";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {Calendar} from "@/components/ui/calendar";

const DashboardPage = () => {

    return (
        <div className="">
            <Button className="bg-black border my-4">
                <Link href={"/"}>
                    <div className="flex items-center">
                        <ArrowLeft className="text-white mr-2" />
                        <span className="text-white">Go Back</span>
                    </div>
                </Link>
            </Button>
            <div className="flex flex-row items-center">
                <div className="flex-grow text-gray-300 justify-center flex mt-4 font-semibold text-2xl">
                    Dashboard
                </div>
            </div>
            <div className="w-max mx-auto flex flex-row gap-32  ">
                <DataComponent />
                <Calendar className="mt-8"/>
            </div>
        </div>
    );
};

export default DashboardPage;
