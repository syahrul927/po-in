import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { ArrowRight, MenuIcon } from "lucide-react";

const Dashboard = () => {
    return (
        <Layout className="flex flex-col px-4">
            <div className="sticky flex items-center gap-3 py-4">
                <Sidebar />
                <p className="text-xl font-bold">Dashboard</p>
            </div>
            <div className="grid auto-cols-max grid-cols-2 gap-3">
                <div className="flex h-40 flex-col rounded-lg bg-neutral-100 bg-opacity-90 p-4 invert">
                    <div className="text-2xl font-semibold">9</div>
                    <div className="text-lg text-neutral-500">
                        Total Active Orders
                    </div>
                    <div className="mt-auto w-full">
                        <div>20%</div>
                        <Progress value={36} className="w-full" />
                    </div>
                </div>
                <div className="flex h-40 flex-col rounded-lg bg-neutral-100 bg-opacity-90 p-4">
                    <div className="text-2xl font-semibold">45</div>
                    <div className="text-lg text-neutral-500">Total Order</div>
                    <div className="mt-auto">
                        <div>20%</div>
                        <Progress value={36} className="w-full" />
                    </div>
                </div>
                <div className="flex h-40 flex-col rounded-lg bg-neutral-100 bg-opacity-90 p-4">
                    <div className="text-2xl font-semibold">10</div>
                    <div className="text-lg text-neutral-500">Total Menus</div>
                    <div className="mt-auto">
                        <div>20%</div>
                        <Progress value={36} className="w-full" />
                    </div>
                </div>
                <div className="flex h-40 flex-col rounded-lg bg-neutral-100 bg-opacity-90 p-4">
                    <div className="text-2xl font-semibold">120</div>
                    <div className="text-lg text-neutral-500">Total Menus</div>
                    <div className="mt-auto">
                        <div>20%</div>
                        <Progress value={36} className="w-full" />
                    </div>
                </div>
            </div>
            <div className="flex w-full flex-col py-6">
                <div className="">
                    <p className="text-xl font-semibold">Revenue</p>
                </div>
            </div>
        </Layout>
    );
};
export default Dashboard;

const Sidebar = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Button variant={"link"} className="px-0">
                    <MenuIcon />
                </Button>
            </SheetTrigger>
            <SheetContent side={"left"} className="flex flex-col">
                <SheetHeader className="text-start">
                    <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="mb-auto w-full">
                    <ul className="flex w-full flex-col gap-4 divide-y">
                        <li className="w-full">
                            <Button
                                variant={"ghost"}
                                className="w-full justify-start text-start"
                            >
                                Dashboard
                            </Button>
                        </li>
                        <li className="w-full">
                            <Button
                                variant={"ghost"}
                                className="w-full justify-start text-start"
                            >
                                Session
                            </Button>
                        </li>
                        <li className="w-full">
                            <Button
                                variant={"ghost"}
                                className="w-full justify-start text-start"
                            >
                                Product
                            </Button>
                        </li>
                    </ul>
                </div>
                <SheetFooter>
                    <Button
                        variant={"ghost"}
                        className="flex w-full items-center justify-start border-t py-4"
                    >
                        <p>Logout</p> <ArrowRight size={16} />
                    </Button>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
};
