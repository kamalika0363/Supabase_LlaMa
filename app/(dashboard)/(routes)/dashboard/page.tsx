"use client";
import DataComponent from "@/app/(dashboard)/(routes)/dashboard/data";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

const DashboardPage = () => {
    return (
        <div className="flex flex-col items-center sm:items-start max-w-screen-xl mx-auto">
            <div className="flex sm:flex-col flex-row gap-8">
                <Button className="bg-black border my-4">
                    <Link href={"/"}>
                        <div className="flex items-center">
                            <ArrowLeft className="text-white mr-2" />
                            <span className="text-white">Go Back</span>
                        </div>
                    </Link>
                </Button>
                <div className="text-gray-300 sm:mt-4 mt-6 font-semibold text-2xl">
                    Dashboard
                </div>
            </div>
            <div className="w-full sm:w-auto mt-4 sm:flex sm:gap-8">
                <DataComponent />
                <Calendar className="mt-8 sm:mt-16 justify-center flex" />
            </div>
        </div>
    );
};

export default DashboardPage;
