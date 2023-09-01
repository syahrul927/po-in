import Layout from "@/components/layout";
import Product from "@/components/product";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { ArrowRightIcon, BellIcon } from "@radix-ui/react-icons";
const Store = () => {
    return (
        <Layout className="px-4">
            <div className="flex flex-col space-y-4 px-2 py-4">
                <div className="flex flex-row-reverse items-center  justify-between">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-400">
                        <BellIcon />
                    </div>
                    <div className="flex flex-col">
                        <p className="inline-flex items-center gap-x-2 text-center text-lg font-bold">
                            Store Up
                        </p>
                        <p className="text-xs font-light text-neutral-400">
                            Cari apa aja ya!
                        </p>
                    </div>
                </div>
                <p className="text-2xl font-extrabold">Collections</p>
            </div>
            <div className="flex max-h-full flex-col space-y-3 overflow-y-auto px-2 pb-12 pt-2">
                {[...Array(8)].map((item: number) => (
                    <Sheet key={item}>
                        <SheetTrigger>
                            <Product
                                name="Etherum"
                                image={
                                    "https://cdn1.vectorstock.com/i/1000x1000/74/40/fast-food-flat-design-vector-32207440.jpg"
                                }
                                price={450000}
                                id="1"
                            />
                        </SheetTrigger>
                        <SheetContent
                            className="w-[400px] sm:w-[540px]"
                            side={"bottom"}
                        >
                            <SheetHeader>
                                <SheetTitle>
                                    Are you sure absolutely sure?
                                </SheetTitle>
                                <SheetDescription>
                                    This action cannot be undone. This will
                                    permanently delete your account and remove
                                    your data from our servers.
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                ))}
            </div>
        </Layout>
    );
};
export default Store;
