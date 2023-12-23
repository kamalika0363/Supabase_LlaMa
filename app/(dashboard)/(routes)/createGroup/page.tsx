"use client";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Tabs,
    TabsContent,
} from "@/components/ui/tabs";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";


const CreateGroup = () => {


    return (
        <div className="px-6 flex flex-row gap-14">
            <Tabs defaultValue="account" className="w-[400px] h-full">
                <div className="flex flex-row items-center">
                    <Button className="bg-black border my-4">
                        <Link href={"/"}>
                            <div className="flex items-center">
                                <ArrowLeft className="text-white mr-2" />
                                <span className="text-white">Go Back</span>
                            </div>
                        </Link>
                    </Button>
                </div>
                <TabsContent value="account">
                    <Card className="bg-black">
                        <CardHeader>
                            <CardTitle className="text-gray-200">Group</CardTitle>
                            <CardDescription>Make a group to store data.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2 text-gray-200">
                            <div className="space-y-1">
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    id="name"
                                    className="bg-black"
                                    defaultValue="Data Structures"
                                />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="username">Deadline</Label>
                                <Input
                                    id="username"
                                    className="bg-black"
                                    defaultValue="16th Dec"
                                />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="username">Credits</Label>
                                <Input
                                    id="username"
                                    className="bg-black"
                                    defaultValue="2"
                                />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="bg-black border border-white">Create</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default CreateGroup;
