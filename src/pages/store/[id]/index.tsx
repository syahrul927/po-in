import Layout from "@/components/layout";
import NewProduct from "@/components/new-product";
import type { ProductProps } from "@/components/product";
import Product from "@/components/product";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import DummyData from "@/data";
import { Star } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const Store = () => {
    const router = useRouter();
    const id = router.query.id as string;
    const [products, setProducts] = useState<ProductProps[]>([]);
    useEffect(() => {
        setProducts(
            DummyData.map((item) => ({
                id: new String(item.id).toString(),
                name: item.title,
                description: item.description,
                image: item.url,
                price: 24000,
            }))
        );
    }, []);
    return (
        <Layout className="relative gap-12 overflow-y-auto px-4">
            <div className="flex flex-col items-center gap-4 pb-12 pt-4">
                <div className="relative mb-16 h-52 w-full">
                    <Image
                        src={"/banner.jpg"}
                        fill
                        alt="banner"
                        className="rounded-xl "
                    />
                    <div className="absolute bottom-0 right-[50%] h-32 w-32 translate-x-[50%] translate-y-[50%] ">
                        <Image
                            src={"/profile.jpeg"}
                            alt="profile"
                            fill
                            className="rounded-full border-[5px] border-white"
                        />
                    </div>
                </div>
                {/* desc profile */}
                <div className="flex w-full flex-col items-center justify-center gap-3 text-center">
                    <div className="text-3xl font-bold">{`${id}`}</div>
                    <div>
                        Selamat datang di toko buku Syahrul, cari buku yang kamu
                        mau dan kita cod an anying
                    </div>
                </div>
                <div className="mt-6 flex max-w-xs justify-center gap-x-16 text-center">
                    <div className="flex grow flex-col items-center justify-center">
                        <div className="text-3xl font-bold">
                            {products.length}
                        </div>
                        <div className="text-neutral-500">Produk</div>
                    </div>
                    <div className="flex grow flex-col items-center justify-center">
                        <div className="text-3xl font-bold">{16}</div>
                        <div className="text-neutral-500">Pesanan</div>
                    </div>
                    <div className="flex grow flex-col items-center justify-center">
                        <div className="flex items-center justify-center gap-0.5 text-3xl font-bold">
                            <p>{"4.3"}</p>
                        </div>
                        <div className="flex items-center justify-center gap-0.5 text-neutral-500">
                            <p>Rating</p> <Star className="" size={12} />
                        </div>
                    </div>
                </div>
                <div className="flex w-full gap-2">
                    <Button className="flex-1">Whatsapp</Button>
                    <Button
                        variant={"outline"}
                        className="text-center align-middle text-lg"
                    >
                        ...
                    </Button>
                </div>
            </div>
            {/* <div className="sticky left-0 top-0 z-10 flex w-full max-w-md items-center justify-between overflow-x-hidden bg-white p-4">
                <span className="text-xl font-bold capitalize">
                    Toko {`${id}`}
                </span>
                <span>
                    <ShoppingBagIcon size={20} />
                </span>
            </div> */}
            <div className="flex flex-col gap-3">
                <p className="px-4 text-lg font-semibold">Produk Terlaris</p>
                <ScrollArea>
                    <div className="flex">
                        {products.map((item) => (
                            <Product key={item.id} {...item} />
                        ))}
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </div>
            <div className="flex flex-col gap-3">
                <p className="px-4 text-lg font-semibold">Daftar Produk</p>
                <div className="flex flex-col pb-12">
                    {products.map((item) => (
                        <NewProduct key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </Layout>
    );
};
export default Store;
